import Head from "next/head";
import styles from "@/styles/Work.module.css";
import { createClient } from '@/prismicio';

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
            <meta property="og:image:width" content={page?.data?.meta_image?.dimensions?.width || ''} />
            <meta property="og:image:height" content={page?.data?.meta_image?.dimensions.height || ''} />
            <meta name="viewport" content="width=device-width, initial-scale=1" />
            <link rel="icon" href="/favicon.ico" />
          </Head>
          <main>
            <div className={styles.content_container}>
            <p>{page?.data?.meta_title}</p>
            </div>
          </main>
        </>
      )
}

export async function getStaticProps({ previewData }) {
    try {
      const client = createClient({ previewData });
      const page = await client.getSingle('work');
      const projects = await client.getAllByType('project');
      const posts = await client.getAllByType('post');
      const blogposts = await client.getAllByType('blogpost');
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