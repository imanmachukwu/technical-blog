import Head from "next/head";
import styles from "@/styles/Home.module.css";
import { createClient } from '@/prismicio'
import { useEffect } from "react";

const Home = ({ page, error}) => {
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
        <title>{page?.data?.meta_title || 'Portfolio'}</title>
        <meta name="description" content={page?.data?.meta_description || ''} />
        <meta property="og:title" content={page?.data?.meta_title || 'Portfolio'} />
        <meta property="og:description" content={page?.data?.meta_description || ''} />
        <meta property="og:image" content={page?.data?.meta_image?.url || ''} />
        <meta property="og:image:width" content={page?.data?.meta_image?.dimensions?.width || ''} />
        <meta property="og:image:height" content={page?.data?.meta_image?.dimensions.height || ''} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
          <span className={styles.normal_title}>{page?.data?.title_normal}</span>
          <span className={styles.italic_title}>{page?.data?.title_italics}</span>
      </main>
    </>
  );
}

export async function getStaticProps({ previewData }) {
  try {
    const client = createClient({ previewData })
    const page = await client.getSingle('Index');
    //console.log("Page from Index:", page)
    return {
      props: { page }
    }
  } catch (error) {
    //console.error('Error fetching Index page from Prismic:', error);
    return {
      props: { error: error.message },
    }
  }
}

export default Home;
