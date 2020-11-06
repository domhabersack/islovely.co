import React from 'react'

import mergeClassnames from '../utils/merge-classnames'

export default ({
  alt,
  caption,
  className,
  src,
}) => (
  <figure
    className={mergeClassnames(`
      margin-horizontal-auto
      margin-vertical-m
      width-full
      l:margin-bottom-l
      l:margin-top-l
    `, className)}
  >
    <img
      alt={alt}
      className="width-full"
      src={src}
    />

    {caption != null ? (
      <figcaption
        className={`
          color-gray-500
          font-size-12-short
          italic
          margin-0
          margin-top-xs
          text-align-center
        `}
      >
        {caption}
      </figcaption>
    ) : null}
  </figure>
)
