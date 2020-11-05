import React from 'react'

import mergeClassnames from '../utils/merge-classnames'
import typeToClassname from '../utils/type-to-classname'

export default ({
  children,
  className,
  ...props
}) => (
  <h2
    className={mergeClassnames(typeToClassname('h2'), className)}
    {...props}
  >
    {children}
  </h2>
)
