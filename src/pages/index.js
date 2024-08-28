import Head from "next/head";
import styles from "@/styles/Home.module.css";
import { createClient, linkResolver } from '@/prismicio'
import { PrismicNextLink } from "@prismicio/next";

export default function Home({ page, fetchedProjects, error, innerError}) {
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
      <main className={styles.main}>
        <div className={styles.content__container_parent}>
          {error ? (
            <div className={styles.error__container}>Hey, please retry that.</div>
          ) : (
            <div className={styles.content__container}>
              {fetchedProjects.map((project) => {
                <a href={project.url} className={styles.project} key={project.id} linkResolver={linkResolver}>
                  <p className={styles.project__year}>{project.data.year}</p>
                  <h1 className={styles.project__title}>{project.data.title}</h1>
                  <p className={styles.project__description}>{project.data.description}</p>
                </a>
              })}
            </div>
          )}
        </div>
      </main>
    </>
  );
}

export async function getStaticProps({ previewData }) {
  try {
    const client = createClient({ previewData })
    const page = await client.getSingle('Index');
    try {
      const fetchedProjects = await client.getAllByType('project');
      return {
        props: { page, fetchedProjects },
      }
    } catch (innerError) {
      console.error('Error fetching projects from Prismic:', innerError.message);
      return {
        props: { innerError: innerError.message },
      }
    }
  } catch (error) {
    console.error('Error fetching Index page from Prismic:', error.message);
    return {
      props: { error: error.message },
    }
  }
}
