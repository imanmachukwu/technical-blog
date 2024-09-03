import { createClient } from '@/prismicio'
import { PrismicText } from '@prismicio/react'

export default function Blog({ blogpost }) {
  return (
    <div>
      <h1>
      {blogpost.data.title}
      </h1>
    </div>
  )
}

export async function getServerSideProps({ params, previewData }) {
  const client = createClient({ previewData })

  const blogpost = await client.getByUID('blogpost', params.uid)

  if (!blogpost) {
    return {
      notFound: true,
    }
  }

  return {
    props: {
      blogpost,
    },
  }
}