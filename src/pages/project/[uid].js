import { createClient } from '@/prismicio'
import styles from '@/styles/Project.module.css'
//import { PrismicNextLink } from '@prismicio/next'
import { PrismicRichText, PrismicNextImage } from '@prismicio/next'
import Head from 'next/head'
import Link from 'next/link'

const Project = ({ project, error }) => {
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
        <title>{project.data.meta_title || 'Project'}</title>
        <meta name="description" content={project.data.meta_description || ''} />
        <meta property="og:title" content={project.data.meta_title || 'Project'} />
        <meta property="og:description" content={project.data.meta_description || ''} />
        <meta property="og:image" content={project.data.meta_image?.url || ''} />
        <meta property="og:image:width" content={project.data.meta_image_width || ''} />
        <meta property="og:image:height" content={project.data.meta_image_height || ''} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
    </Head>
    <main>
      <PrismicNextImage field={project.data.featured_image} className={styles.featured_image}/>
      <Link href="/work" className={styles.back_button}>Back</Link>
      <h1 className={styles.title}>
      {project.data.title}
      </h1>
      <p className={styles.date}>
      {new Date(project.data.last_publication_date).toLocaleDateString('en-US', {
              year: 'numeric',
              month: 'long',
              day: 'numeric',
            })}
      </p>
      <div className={styles.content_container}>
        <PrismicRichText field={project.data.text} />
      </div>
    </main>
    </>
  )
}

export async function getServerSideProps({ params, previewData }) {
  try {
    const client = createClient({ previewData })
    const project = await client.getByUID('project', params.uid)

    if (!project) {
      return {
        props: {
          error: error.message || 'Project not found'
        }
      }
    }

    return {
      props: {
        project,
      },
    }
  } catch (error) {
    console.error('Error fetching data from Prismic:', error);
    return {
      props: { error: error.message || 'An error occurred while fetching data' },
    }
  }
}

export default Project;