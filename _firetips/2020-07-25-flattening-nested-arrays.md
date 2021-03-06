---
title: "Flattening nested arrays"
tags: ["JavaScript"]
---
`Array.prototype.flat()` can un-nest nested arrays. It can remove only some levels, or all of them if we tell it to go infinitely many levels deep.

```js
// each value in this array is also how many levels deep it is nested
const nested = [ 0, [1], [[2]], [[[3]]], [[[[[[[[[9]]]]]]]]] ]

// the parameter given to `flat` is how many levels of nesting it removes
nested.flat(0)         // ⇒ [ 0, [1], [[2]], [[[3]]], [[[[[[[[[9]]]]]]]]] ]
nested.flat(1)         // ⇒ [ 0,  1,   [2],   [[3]],   [[[[[[[[9]]]]]]]]  ]
nested.flat(2)         // ⇒ [ 0,  1,    2,     [3],     [[[[[[[9]]]]]]]   ]
nested.flat(Infinity)  // ⇒ [ 0,  1,    2,      3,             9          ]
```
