import Head from "next/head";
import styles from "@/styles/Work.module.css";
import { createClient } from '@/prismicio';
import { PrismicNextLink } from "@prismicio/next";

const Work = ({page, error}) => {
    if (error) {
        return <main>
        <span className={styles.text}>Error</span>
        <span className={styles.text}>Error</span>
        <span className={styles.text}>Refresh?</span>
      </main>;
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
            {page?.data?.works?.map((work, index) => {
              const client = createClient();
              if (work?.link?.type === "project") {
                  console.log("Project ID:", work?.link?.uid)
                  client.getByUID('project', work?.link?.uid)
                  .then((project) => {
                    console.log("Project is:", project)
                    return (
                      <div className={styles.work} key={index} style={{ '--aspect-ratio': 1 / 1 }}>
                        <p className={styles.meta_text}>Project</p>
                        <PrismicNextLink field={work?.link}>
                          <svg
                            width="36"
                            height="13"
                            viewBox="0 0 36 13"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M0 6.5H34.5M34.5 6.5L29 1M34.5 6.5L29 12"
                              stroke="#0D3044"
                              strokeWidth="1.5"
                            />
                          </svg>
                        </PrismicNextLink>
                        <h1 className={styles.work_title}>{project.data.title}</h1>
                      </div>
                    )
                  })
                  .catch((error) => {
                    console.error('Error fetching document:', error);
                    return null;
                  })
              } else if (work?.link?.type === "blogpost") {
                return (
                  <div className={styles.work} key={index} style={{ '--aspect-ratio': 1 / 1 }}>
                    <p className={styles.meta_text}>
                      {new Date(work?.link?.last_publication_date).toLocaleDateString('en-US', {
                        year: 'numeric',
                        month: 'long',
                        day: 'numeric',
                      })}
                    </p>
                    <PrismicNextLink field={work?.link}>
                      <svg
                        width="36"
                        height="13"
                        viewBox="0 0 36 13"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M0 6.5H34.5M34.5 6.5L29 1M34.5 6.5L29 12"
                          stroke="#0D3044"
                          strokeWidth="1.5"
                        />
                      </svg>
                    </PrismicNextLink>
                    <h1 className={styles.work_title}>Blog post title</h1>
                  </div>
                );
              } else if (work?.link?.type === "post") {
                return (
                  <div className={styles.work} key={index} style={{ '--aspect-ratio': 9 / 16 }}>
                    <p className={styles.meta_text}>Post</p>
                    <h1 className={styles.work_title}>Post title</h1>
                  </div>
                );
              } else {
                return null;
              }
            })}
          </main>
        </>
      )
}

export async function getStaticProps({ previewData }) {
    try {
      const client = createClient({ previewData });
      const page = await client.getSingle('work');
      console.log("Page is:", page.data.works)
      return {
        props: { page },
      }
    } catch (error) {
      console.error('Error fetching data from Prismic:', error);
      return {
        props: { error: error.message || 'An error occurred while fetching data' },
      }
    }
  }
  
  export default Work;