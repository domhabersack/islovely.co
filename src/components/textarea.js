import React from 'react'

import mergeClassnames from '../utils/merge-classnames'

export default ({
  className,
  children,
  ...props
}) => (
  <textarea
    className={mergeClassnames(`
      appearance-none
      bg-white
      block
      border-color-gray-300
      border-radius-xxs
      border-style-solid
      border-width-s
      color-gray-700
      font-size-16-medium
      font-weight-400
      m-0
      outline-none
      padding-horizontal-xs-minus-border
      padding-vertical-s-minus-border
      w-full
      focus:border-color-blue-400
    `, className)}
    {...props}
  >
    {children}
  </textarea>
)
