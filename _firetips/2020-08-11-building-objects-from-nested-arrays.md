---
title: "Building objects from nested arrays"
tags: ["JavaScript"]
---
If you have key-value-pairs in nested arrays, you can turn them into an object with `Object.fromEntries()`.

```js
const pairs = [
  ['name', 'Bob'],
  ['occupation', 'Fry cook'],
  ['shape', 'rectangular']
]

Object.fromEntries(pairs)
// ⇒ {
//     name: 'Bob',
//     occupation: 'Fry cook',
//     shape: 'rectangular'
//   }
```
