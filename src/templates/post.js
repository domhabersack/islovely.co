import React from 'react'
import { graphql } from 'gatsby'
import { MDXRenderer} from 'gatsby-plugin-mdx'

import Breakout from '../components/breakout'
import Figure from '../components/figure'
import Layout from '../components/layout'
import MetaTags from '../components/meta-tags'
import PostMeta from '../components/post-meta'
import RichPreview from '../components/rich-preview'
import Tag from '../components/tag'
import mapAttachmentsToNamedObject from '../utils/map-attachments-to-named-object'
import mapFiguresToNamedObject from '../utils/map-figures-to-named-object'
import slugify from '../utils/slugify'

export default function Post({
  data,
}) {
  const {
    body,
    date,
    frontmatter,
    hero,
    slug,
    permalink,
  } = data.post

  const {
    attachments,
    author,
    categories,
    excerpt,
    figures,
    heroAlt,
    heroCaption,
    title,
  } = frontmatter

  const authorName = author.frontmatter.name
  const avatarFluid = author.avatar.childImageSharp.fluid

  return (
    <Layout
      breadcrumbs={[
        {
          label: 'Blog',
          url: '/posts'
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
        heroAlt={heroAlt}
        imageSubpath={`posts/${slug}`}
        permalink={permalink}
        publishedAt={date}
        tags={categories}
        title={title}
        type="article"
      />

      <h1>
        {title}
      </h1>

      <div className="mb-6">
        <PostMeta
          author={authorName}
          avatarFluid={avatarFluid}
          date={date}
        />
      </div>

      <Breakout>
        <Figure
          alt={heroAlt}
          caption={heroCaption}
          className="m-0 mb-6"
          fluid={hero.childImageSharp.fluid}
        />
      </Breakout>

      <div className="break-words mb-8">
        <MDXRenderer
          attachments={mapAttachmentsToNamedObject(attachments)}
          figures={mapFiguresToNamedObject(figures)}
        >
          {body}
        </MDXRenderer>
      </div>

      <div className="flex flex-wrap">
        {categories.map(category => (
          <React.Fragment key={`category-${category}`}>
            <div className="mb-1 mr-1.5">
              <Tag href={`/categories/${slugify(category)}`}>
                {category}
              </Tag>
            </div>
          </React.Fragment>
        ))}
      </div>
    </Layout>
  )
}

export const pageQuery = graphql`
  query($slug: String!) {
    post(
      slug: {
        eq: $slug
      }
    ) {
      body
      date
      frontmatter {
        attachments {
          name
          publicURL
        }
        author {
          avatar {
            childImageSharp {
              fluid(maxWidth: 40) {
                ...GatsbyImageSharpFluid_withWebp_tracedSVG
              }
            }
          }
          frontmatter {
            name
          }
        }
        categories
        excerpt
        figures {
          name
          childImageSharp {
            fluid(maxWidth: 1008) {
              ...GatsbyImageSharpFluid_withWebp_tracedSVG
            }
          }
        }
        heroAlt
        heroCaption
        title
      }
      hero {
        childImageSharp {
          fluid(maxWidth: 1504) {
            ...GatsbyImageSharpFluid_withWebp_tracedSVG
          }
        }
      }
      permalink
      slug
    }
  }
`
