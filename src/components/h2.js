import React from 'react'

import getClassnamesForType from '../utils/get-classnames-for-type'
import mergeClassnames from '../utils/merge-classnames'

export default ({
  children,
  className,
  ...props
}) => (
  <h2
    className={mergeClassnames(getClassnamesForType('heading[depth=2]'), className)}
    {...props}
  >
    {children}
  </h2>
)
