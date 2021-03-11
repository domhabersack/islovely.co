import React from 'react'

import Firetip from '@/components/firetip'
import Layout from '@/components/layout'
import MetaTags from '@/components/meta-tags'
import RichPreview from '@/components/rich-preview'
import Tag from '@/components/tag'
import { getAllFiretips } from '@/lib/api/firetips'

export default function Firetips({
  firetips,
}) {
  const tagCounts = firetips.map(firetip => firetip.tags).flat(1).reduce((dictionary, tag) => ({
    ...dictionary,
    [tag]: (dictionary[tag] || 0) + 1
  }), {})

  const tagsSortedByCount = Object.keys(tagCounts).sort((a, b) => tagCounts[b] - tagCounts[a])

  return (
    <Layout
      breadcrumbs={[
        {
          label: 'Fire tips'
        }
      ]}
    >
      <MetaTags
        description="Snack-sized snippets that help you write better HTML, CSS, and JavaScript."
        title="Fire tips"
      />

      <RichPreview
        description="Snack-sized snippets that help you write better HTML, CSS, and JavaScript."
        imageSubpath="pages/firetips"
        permalink="/firetips"
        title="Fire tips"
      />

      <h1>
        Fire tips
      </h1>

      <div className="flex flex-wrap mb-6">
        {tagsSortedByCount.map(({
          permalink,
          title,
        }) => (
          <React.Fragment key={`tag-${tag}`}>
            <div className="flex items-center mb-1.5 mr-2.5">
              <Tag href={permalink}>
                {title}
              </Tag>&nbsp;<span className="text-gray-500 text-xs dark:text-gray-400">&times; {tagCounts[tag]}</span>
            </div>
          </React.Fragment>
        ))}
      </div>

      <div className="grid gap-6">
        {firetips.map(firetip => (
          <React.Fragment key={`firetip-${firetip.slug}`}>
            <Firetip firetip={firetip} />
          </React.Fragment>
        ))}
      </div>
    </Layout>
  )
}

export async function getStaticProps() {
  const firetips = await getAllFiretips()

  return {
    props: {
      firetips,
    },
  }
}
