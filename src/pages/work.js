import { useState, useEffect } from 'react';
import Head from "next/head";
import styles from "@/styles/Work.module.css";
import { createClient } from '@/prismicio';
import { PrismicNextLink } from "@prismicio/next";

const useLinkedDocument = (client, link) => {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      if (link.type && link.uid) {
        try {
          const response = await fetch(`/api/work_api?type=${link.type}&uid=${link.uid}`);
          if (!response.ok) {
            throw new Error('Network response was not ok');
          }
          const data = await response.json();
          setData(data);
        } catch (error) {
          setError(error.message);
        }
      }
    };

    fetchData();
  }, [client, link]);

  return { data, error };
};

const WorkItem = ({ work, client }) => {
  const { data: linkedData, error } = useLinkedDocument(client, work?.link);

  if (error) {
    return <div className={styles.work_error} style={{ '--aspect-ratio': 1 / 1 }}>
      <p>Error fetching item.</p>
      <p>Please retry</p>
    </div>;
  }

  if (!linkedData) {
    return <div className={styles.work_loading} style={{ '--aspect-ratio': 1 / 1 }}></div>;
  }

  console.log("here is the linked data:". linkedData)

  switch (linkedData.type) {
    case 'blogpost':
      return (
        <div className={styles.work} style={{ '--aspect-ratio': 1 / 1}}>
          <p className={styles.meta_text}>
            {new Date(work?.link?.last_publication_date).toLocaleDateString('en-US', {
              year: 'numeric',
              month: 'long',
              day: 'numeric',
            })}
          </p>
          <PrismicNextLink field={work?.link}>
            <svg width="36" height="13" viewBox="0 0 36 13" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M0 6.5H34.5M34.5 6.5L29 1M34.5 6.5L29 12" stroke="#0D3044" strokeWidth="1.5" />
            </svg>
          </PrismicNextLink>
          <h1 className={styles.work_title}>{linkedData.data.title}</h1>
        </div>
      );
    case 'project':
      return (
        <div className={styles.work} style={{ '--aspect-ratio': 1 / 1, backgroundColor: '#000000'  }}>
          <p className={styles.meta_text} style={{color: 'white'}}>Project</p>
          <PrismicNextLink field={work?.link}>
            <svg width="36" height="13" viewBox="0 0 36 13" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M0 6.5H34.5M34.5 6.5L29 1M34.5 6.5L29 12" stroke="#ffffff" strokeWidth="1.5" />
            </svg>
          </PrismicNextLink>
          {linkedData.data.featured_image && <img src={linkedData.data.featured_image.url} alt={linkedData.data.title} />}
          <h1 className={styles.work_title} style={{color: 'white'}}>{linkedData.data.title}</h1>
        </div>
      );
    case 'post':
      return (
        <div className={styles.work} style={{ '--aspect-ratio': /* linkedData.data.ratio || */ 16 / 9, backgroundColor: '#000000'  }}>
          <p className={styles.meta_text} style={{color: 'white'}}>{linkedData.data.type || 'Post'}</p>
          {linkedData.data.media && <img src={linkedData.data.media.url} alt={linkedData.data.title} />}
          <h1 className={styles.work_title} style={{color: 'white'}}>{linkedData.data.title}</h1>
        </div>
      );
    default:
      return null;
  }
};

const Work = ({ page, error }) => {
  const client = createClient();

  if (error) {
    return (
      <main>
        <span className={styles.text}>Error</span>
        <span className={styles.text}>Error</span>
        <span className={styles.text}>Refresh?</span>
      </main>
    );
  }

  return (
    <>
      <Head>
        <title>{page?.data?.meta_title || 'Work'}</title>
        <meta name="description" content={page?.data?.meta_description || ''} />
        <meta property="og:title" content={page?.data?.meta_title || 'Work'} />
        <meta property="og:description" content={page?.data?.meta_description || ''} />
        <meta property="og:image" content={page?.data?.meta_image?.url || ''} />
        <meta property="og:image:width" content={page?.data?.meta_image_width || ''} />
        <meta property="og:image:height" content={page?.data?.meta_image_height || ''} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        {page?.data?.works?.map((work, index) => (
          <WorkItem key={index} work={work} client={client} />
        ))}
      </main>
    </>
  );
};

export async function getServerSideProps({ previewData }) {
  try {
    const client = createClient({ previewData });
    const page = await client.getSingle('work');
    //console.log("Page is:", page.data.works);
    return {
      props: { page },
    };
  } catch (error) {
    console.error('Error fetching data from Prismic:', error);
    return {
      props: { error: error.message || 'An error occurred while fetching data' },
    };
  }
}

export default Work;