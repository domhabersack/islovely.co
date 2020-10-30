import React from 'react'
import { graphql } from 'gatsby'

import Emoji from '../components/emoji'
import Layout from '../components/layout'
import MetaTags from '../components/meta-tags'
import RichPreview from '../components/rich-preview'
import Taper from '../components/taper'

export default ({ data }) => {
  const {
    fields,
    frontmatter,
    html
  } = data.markdownRemark

  const { permalink } = fields

  const {
    excerpt,
    title
  } = frontmatter

  return (
    <Layout
      breadcrumbs={[
        {
          label: 'Fire tips',
          url: '/firetips'
        }, {
          label: title
        }
      ]}
    >
      <MetaTags
        description={excerpt}
        title={title}
      />

      <RichPreview
        description={excerpt}
        permalink={permalink}
        title={title}
      />

      <Taper>
        <h1>
          <Emoji name=":fire:" />
          {title}
        </h1>

        <div dangerouslySetInnerHTML={{ __html: html }} />
      </Taper>
    </Layout>
  )
}

export const pageQuery = graphql`
  query($slug: String!) {
    markdownRemark(
      fields: {
        slug: {
          eq: $slug
        }
      }
    ) {
      fields {
        permalink
      }
      html
      frontmatter {
        excerpt
        title
      }
    }
  }
`
