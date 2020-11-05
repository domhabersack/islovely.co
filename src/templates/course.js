import React from 'react'
import { graphql } from 'gatsby'

import ConvertkitForm from '../components/convertkit-form'
import Layout from '../components/layout'
import MetaTags from '../components/meta-tags'
import RichPreview from '../components/rich-preview'
import Taper from '../components/taper'
import Video from '../components/video'
import { H1, H4, Strong } from '../styled-tags'

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
    permalink,
    slug
  } = fields

  const {
    cta,
    emails,
    excerpt,
    hours,
    title,
    svForm,
    playlist,
    uid,
    videos,
    weeks
  } = frontmatter

  return (
    <Layout
      breadcrumbs={[
        {
          label: 'Courses',
          url: '/courses'
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

        <aside
          className={`
            flex
            flex-wrap
            font-size-12-medium
            margin-bottom-s
          `}
        >
          {emails && (
            <div
              className={`u
                align-items-center
                inline-flex
                margin-right-s
              `}
            >
              <img
                alt=""
                className="margin-right-xxs"
                src="/assets/icons/email-with-letter.svg"
              />

              <span>
                <Strong>{emails}</Strong> emails
              </span>
            </div>
          )}

          {videos && (
            <div
              className={`
                align-items-center
                inline-flex
                margin-right-s
              `}
            >
              <img
                alt=""
                className="margin-right-xxs"
                src="/assets/icons/video.svg"
              />

              <span>
                <Strong>{videos}</Strong> videos
              </span>
            </div>
          )}

          {hours && (
            <div
              className={`
                align-items-center
                inline-flex
                margin-right-s
              `}
            >
              <img
                alt=""
                className="margin-right-xxs"
                src="/assets/icons/clock.svg"
              />

              <span>
                <Strong>{hours}</Strong> hours
              </span>
            </div>
          )}

          {weeks && (
            <div
              className={`
                align-items-center
                inline-flex
                margin-right-s
              `}
            >
              <img
                alt=""
                className="margin-right-xxs"
                src="/assets/icons/calendar.svg"
              />

              <span>
                <Strong>{weeks}</Strong> weeks
              </span>
            </div>
          )}
        </aside>

        <img
          alt={title}
          className="height-192"
          src={`/assets/courses/${slug}.png`}
        />

        <div
          dangerouslySetInnerHTML={{ __html: html }}
        />

        <div
          className="margin-bottom-xl"
        >
          <ConvertkitForm
            cta={cta}
            sourceUrl={location.href}
            svForm={svForm}
            uid={uid}
          />
        </div>
      </Taper>

      {playlist && (
        <div
          className={`
            grid
            grid-columns-1
            grid-column-gap
            grid-row-gap-l
            xs:grid-columns-2
            xs:grid-row-gap-xs
            m:grid-columns-3
            m:grid-row-gap-m
            l:grid-row-gap-l
          `}
        >
          {playlist.map(({
            duration,
            title,
            vimeoId,
            youtubeId
          }, index) => (
            <div
              key={`video-${title}`}
            >
              <div
                className="margin-bottom-xxs"
              >
                <Video
                  title={title}
                  vimeoId={vimeoId}
                  youtubeId={youtubeId}
                />
              </div>

              <H4
                className={`
                  font-size-16-short
                  font-weight-400
                `}
              >
                <span
                  className="color-gray-500"
                >
                  #{index + 1}
                </span>

                {' '}

                {title}

                {' '}

                <span className="color-gray-500">
                  ({duration})
                </span>
              </H4>
            </div>
          ))}
        </div>
      )}
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
        slug
      }
      html
      frontmatter {
        cta
        emails
        excerpt
        hours
        playlist {
          duration
          title
          vimeoId
        }
        svForm
        title
        uid
        videos
        weeks
      }
    }
  }
`
