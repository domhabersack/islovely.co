import React from 'react'
import { graphql } from 'gatsby'

import Layout from '../components/layout'
import MailingListSignup from '../components/mailing-list-signup'
import MetaTags from '../components/meta-tags'
import RichPreview from '../components/rich-preview'
import Taper from '../components/taper'
import { H1, P } from '../styled-tags'
import formatDate from '../utils/format-date'

export default ({
  data,
  location
}) => {
  const {
    fields,
    frontmatter,
    html
  } = data.markdownRemark

  const {
    date,
    permalink
  } = fields

  const {
    excerpt,
    title
  } = frontmatter

  return (
    <Layout
      breadcrumbs={[
        {
          label: 'Newsletter',
          url: '/newsletter'
        }, {
          label: 'Archive',
          url: '/newsletter/archive'
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
        <H1>
          {title}
        </H1>

        <P
          className={`
            color-gray-500
            font-size-12-short
            margin-bottom-s
          `}
        >
          {formatDate(date)}
        </P>

        <div
          className="margin-bottom-xl"
          dangerouslySetInnerHTML={{ __html: html }}
        />

        <MailingListSignup
          sourceUrl={location.href}
        />
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
        date
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
