import { createClient } from '@/prismicio'
import styles from '@/styles/Blog.module.css'
//import { PrismicNextLink } from '@prismicio/next'
import { PrismicRichText } from '@prismicio/react'
import Head from 'next/head'
import Link from 'next/link'

const Blog = ({ blogpost, error }) => {
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
        <title>{blogpost.data.meta_title || 'blogpost'}</title>
        <meta name="description" content={blogpost.data.meta_description || ''} />
        <meta property="og:title" content={blogpost.data.meta_title || 'blogpost'} />
        <meta property="og:description" content={blogpost.data.meta_description || ''} />
        <meta property="og:image" content={blogpost.data.meta_image?.url || ''} />
        <meta property="og:image:width" content={blogpost.data.meta_image_width || ''} />
        <meta property="og:image:height" content={blogpost.data.meta_image_height || ''} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
    </Head>
    <main>
      <Link href="/work" className={styles.back_button}>Back</Link>
      <h1 className={styles.title}>
      {blogpost.data.title}
      </h1>
      <p className={styles.date}>
      {new Date(blogpost.data.last_publication_date).toLocaleDateString('en-US', {
              year: 'numeric',
              month: 'long',
              day: 'numeric',
            })}
      </p>
      <div className={styles.content_container}>
        <PrismicRichText field={blogpost.data.text} />
      </div>
    </main>
    </>
  )
}

export async function getServerSideProps({ params, previewData }) {
  try {
    const client = createClient({ previewData })
    const blogpost = await client.getByUID('blogpost', params.uid)

    if (!blogpost) {
      return {
        props: {
          error: error.message || 'Blog post not found'
        }
      }
    }

    return {
      props: {
        blogpost,
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