import React from 'react'
import { MDXRenderer } from 'gatsby-plugin-mdx'

import Card from '../components/card'
import Tag from '../components/tag'
import { A, H2, P } from '../styled-tags'
import slugify from '../utils/slugify'

export default ({ 
  firetip
}) => {
  const {
    body,
    fields,
    frontmatter,
  } = firetip

  const {
    tags,
    title,
  } = frontmatter

  const {
    slug
  } = fields

  return (
    <Card>
      <div
        className={`
          padding-horizontal-s
          padding-vertical-s
        `}
      >
        <H2
          className={`
            font-size-16-short
            font-weight-600
            margin-0
            margin-bottom-s
          `}
        >
          <A
            className={`
              color-gray-900
              visited:color-gray-900
            `}
            href={`/firetips/${slug}`}
          >
            {title}
          </A>
        </H2>

        <MDXRenderer>
          {body}
        </MDXRenderer>

        <div
          className={`
            flex
            flex-wrap
          `}
        >
          {tags.map(tag => (
            <div
              className={`
                margin-bottom-xxs
                margin-right-xxs
              `}
              key={`tag-${tag}`}
            >
              <Tag
                href={`/firetips/tags/${slugify(tag)}`}
              >
                {tag}
              </Tag>
            </div>
          ))}
        </div>
      </div>

      <footer
        className={`
          background-color-gray-100
          padding-horizontal-s
          padding-vertical-s
        `}
      >
        <P
          className={`
            color-gray-600
            font-size-12-medium
            margin-0
          `}
        >
          <span
            className="margin-right-xxs"
          >
            Permalink:
          </span>

          <A
            href={`/firetips/${slug}`}
          >
            islovely.co/firetips/{slug}
          </A>
        </P>
      </footer>
    </Card>
  )
}
