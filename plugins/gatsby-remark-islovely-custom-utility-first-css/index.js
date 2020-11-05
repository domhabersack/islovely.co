const visit = require('unist-util-visit')

const TYPE_TO_CLASSNAME = {
  figcaption: `
    color-gray-500
    font-size-12-short
    italic
    margin-0
    margin-top-xs
    text-align-center
  `,
  figure: `
    columns-8-of-12
    margin-horizontal-auto
    margin-vertical-m
    m:columns-8-of-10
    l:columns-9-of-12
    l:margin-bottom-l
    l:margin-top-l
  `,
  h1: `
    font-size-24-short
    font-weight-700
    margin-0
    margin-bottom-s
    margin-top-m
    xs:font-size-30-short
    l:font-size-36-short
    l:margin-bottom-m
    l:margin-top-l
  `,
  h2: `
    font-size-20-short
    font-weight-700
    margin-0
    margin-bottom-s
    margin-top-m
    xs:font-size-24-short
    l:font-size-30-short
    l:margin-bottom-m
  `,
  h4: `
    font-size-16-short
    font-weight-700
    margin-0
  `,
  input: `
    appearance-none
    background-color-white
    border-color-gray-300
    border-radius-xs
    border-style-solid
    border-width-s
    color-gray-700
    font-size-16-medium
    font-weight-400
    margin-0
    outline-none
    padding-horizontal-xs-minus-border
    padding-vertical-s-minus-border
    width-full
    focus:border-color-blue-400
  `,
  label: `
    block
    font-size-16-medium
    font-weight-500
    margin-bottom-xxs
  `,
  link: `
    color-blue-500
    no-decoration
    focus:outline
    hover:underline
    visited:color-blue-500
  `,
  listItem: `
    font-size-16-medium
    m:font-size-18-medium
  `,
  paragraph: `
    font-size-16-medium
    margin-0
    margin-bottom-s
    m:font-size-18-medium
    m:margin-bottom-m
  `,
  strong: `
    font-weight-600
  `,
  textarea: `
    appearance-none
    background-color-white
    block
    border-color-gray-300
    border-radius-xxs
    border-style-solid
    border-width-s
    color-gray-700
    font-size-16-medium
    font-weight-400
    margin-0
    outline-none
    padding-horizontal-xs-minus-border
    padding-vertical-s-minus-border
    width-full
    focus:border-color-blue-400
  `,
}

module.exports = ({ markdownAST }) => {
  Object.keys(TYPE_TO_CLASSNAME).forEach(type => {
    visit(markdownAST, type, node => {
      node.data = node.data || {}

      node.data.hProperties = {
        className: `background-color-green-200 ${TYPE_TO_CLASSNAME[type]}`
      }
    })
  })

  return markdownAST
}
