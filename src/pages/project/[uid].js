import { createClient } from '@/prismicio'
import { PrismicText } from '@prismicio/react'

export default function Project({ project }) {
  return (
    <div>
      <h1>
        <PrismicText field={project.data.title} />
      </h1>
    </div>
  )
}

export async function getStaticPaths({ params, previewData }) {
  const client = createClient({ previewData })

  const project = await client.getByUID('project', params.uid)

  if (!project) {
    return {
      notFound: true,
    }
  }

  return {
    props: {
      project,
    },
  }
}