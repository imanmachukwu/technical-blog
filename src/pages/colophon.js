import Head from "next/head";
import { createClient } from '@/prismicio'; // Make sure this import is correct

const Colophon = ({ page, error }) => {
  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <>
      <Head>
        <title>{page?.data?.meta_title || 'Colophon'}</title>
        <meta name="description" content={page?.data?.meta_description || ''} />
        <meta property="og:title" content={page?.data?.meta_title || 'Colophon'} />
        <meta property="og:description" content={page?.data?.meta_description || ''} />
        <meta property="og:image" content={page?.data?.meta_image?.url || ''} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div>ColophonTitle</div>
    </>
  )
}

export async function getStaticProps({ previewData }) {
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