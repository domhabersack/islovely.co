import React from 'react'

import mergeClassnames from '../utils/merge-classnames'

export default ({
  children,
  className,
  ...props
}) => (
  <h6
    className={mergeClassnames(`
      font-size-16-short
      font-weight-700
      m-0
    `, className)}
    {...props}
  >
    {children}
  </h6>
)
