import { createClient } from '@/prismicio';
import styles from "@/styles/Home.module.css";
import { PrismicNextLink } from "@prismicio/next";
import Head from "next/head";
//import { useEffect, useState } from 'react';

// const useLinkedDocument = (client, link) => {
//   const [data, setData] = useState(null);
//   const [error, setError] = useState(null);

//   useEffect(() => {
//     console.log("Link is"link)

//     const fetchData = async () => {
//       if (link.type && link.uid) {
//         try {
//           const response = await fetch(`/api/work_api?type=${link.type}&uid=${link.uid}`);
//           if (!response.ok) {
//             throw new Error('Network response was not ok');
//           }
//           const data = await response.json();
//           setData(data);
//         } catch (error) {
//           setError(error.message);
//         }
//       }
//     };

//     fetchData();
//   }, [client, link]);

//   return { data, error };
// };

// const Post = ({ work, client }) => {
//   const { data: linkedData, error } = useLinkedDocument(client, work?.link);

//   if (error) {
//     return <div className={styles.work_error} style={{ '--aspect-ratio': 1 / 1 }}>
//       <p>Error fetching item.</p>
//       <p>Please retry</p>
//     </div>;
//   }

//   if (!linkedData || linkedData.type !== 'blogpost') {
//     return null;
//   }

//   return (
//     <>
//       <PrismicNextLink field={work?.link} className={styles.work} style={{ '--aspect-ratio': 1 / 1}}>
//         <p className={styles.meta_text}>
//           {new Date(work?.link?.last_publication_date).toLocaleDateString('en-US', {
//             year: 'numeric',
//             month: 'long',
//             day: 'numeric',
//           })}
//         </p>
//         <svg width="36" height="13" viewBox="0 0 36 13" fill="none" xmlns="http://www.w3.org/2000/svg">
//           <path d="M0 6.5H34.5M34.5 6.5L29 1M34.5 6.5L29 12" stroke="#0D3044" strokeWidth="1.5" />
//         </svg>
//         <h1 className={styles.work_title}>{linkedData.data.title}</h1>
//       </PrismicNextLink>
//     </>
//   );
// }

const Home = ({ linkedData, error }) => {
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
        <title>My private blog</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        {linkedData?.map((post, index) => (
          <PrismicNextLink key={index} field={post} className={styles.work} style={{ '--aspect-ratio': 1 / 1}}>
            <p className={styles.meta_text}>
              {new Date(post.first_publication_date).toLocaleDateString('en-US', {
                year: 'numeric',
                month: 'long',
                day: 'numeric',
              })}
            </p>
            <svg width="36" height="13" viewBox="0 0 36 13" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M0 6.5H34.5M34.5 6.5L29 1M34.5 6.5L29 12" stroke="#0D3044" strokeWidth="1.5" />
            </svg>
            <h1 className={styles.work_title}>{post.data.title}</h1>
          </PrismicNextLink>
        ))}
      </main>
    </>
  );
};

export async function getServerSideProps({ previewData }) {
  console.log({previewData})
  try {
    const client = createClient();
    const linkedData = await client.getAllByType("blogpost", {
      orderings: {
              field: 'document.first_publication_date',
              direction: 'desc'
            }
    });

    //console.log(linkedData)

    return {
      props: { linkedData },
    };
  } catch (error) {
    console.error('Error fetching data from Prismic:', error);
    return {
      props: { error: error.message || 'An error occurred while fetching data' },
    };
  }
}

export default Home;
