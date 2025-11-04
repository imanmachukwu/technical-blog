import { createClient } from '@/prismicio'
import styles from '@/styles/Blog.module.css'
//import { PrismicNextLink } from '@prismicio/next'
import { PrismicRichText } from '@prismicio/react'
import Head from 'next/head'
import Link from 'next/link'

const Blog = ({ technicalpost, error }) => {
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
        <title>{technicalpost.data.meta_title || 'technicalpost'}</title>
        <meta name="description" content={technicalpost.data.meta_description || ''} />
        <meta property="og:title" content={technicalpost.data.meta_title || 'technicalpost'} />
        <meta property="og:description" content={technicalpost.data.meta_description || ''} />
        <meta property="og:image" content={technicalpost.data.meta_image?.url || ''} />
        <meta property="og:image:width" content={technicalpost.data.meta_image_width || ''} />
        <meta property="og:image:height" content={technicalpost.data.meta_image_height || ''} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
    </Head>
    <main>
      <Link href="/" className={styles.back_button} prefetch>
        <svg width="36" height="13" viewBox="0 0 36 13" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M0 6.5H34.5M34.5 6.5L29 1M34.5 6.5L29 12" stroke="#f5f5f5" strokeWidth="1.5" />
        </svg>
      </Link>
      <h1 className={styles.title}>
        {technicalpost.data.title}
      </h1>
      <p className={styles.date}>
        {new Date(technicalpost.data.date).toLocaleDateString('en-US', {
          year: 'numeric',
          month: 'long',
          day: 'numeric',
        })}
      </p>
      <div className={styles.content_container}>
        <PrismicRichText field={technicalpost.data.blog} />
      </div>
    </main>
    </>
  )
}

export async function getServerSideProps({ params, previewData }) {
  try {
    const client = createClient({ previewData })
    const technicalpost = await client.getByUID('technicalpost', params.uid)

    if (!technicalpost) {
      return {
        props: {
          error: error.message || 'Blog post not found'
        }
      }
    }

    return {
      props: {
        technicalpost,
      },
    }
  } catch (error) {
    console.error('Error fetching data from Prismic:', error);
    return {
      props: { error: error.message || 'An error occurred while fetching data' },
    }
  }
}

export default Blog;
