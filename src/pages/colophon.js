import Head from "next/head";
import styles from "@/styles/Colophon.module.css";
import { createClient } from '@/prismicio';
import { PrismicRichText } from "@prismicio/react"; // Make sure this import is correct

const Colophon = ({ page, error }) => {
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
        <title>{page?.data?.meta_title || 'Colophon'}</title>
        <meta name="description" content={page?.data?.meta_description || ''} />
        <meta property="og:title" content={page?.data?.meta_title || 'Colophon'} />
        <meta property="og:description" content={page?.data?.meta_description || ''} />
        <meta property="og:image" content={page?.data?.meta_image?.url || ''} />
        <meta property="og:image:width" content={page?.data?.meta_image_width || ''} />
        <meta property="og:image:height" content={page?.data?.meta_image_height || ''} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <div className={styles.content_container}>
        <PrismicRichText field={page?.data?.text} />
        </div>
      </main>
    </>
  )
}

export async function getServerSideProps({ previewData }) {
  try {
    const client = createClient({ previewData });
    const page = await client.getSingle('colophon');
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

export default Colophon;