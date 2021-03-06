---
title: "Removing duplication with ternary operators"
tags: ["JavaScript", "readability"]
---
One use of the ternary operator is to reduce duplication. If we’d call the same function with a different parameter in each case, we can move the ternary into the function call.

Watch out for readability: the shortest version isn’t always the best option.

```js
// we want to wish people a happy weekend/workweek depending on the day
const isWeekend = day === 'Saturday' || day === 'Sunday'

// we can call `console.log` with the respective message like this
isWeekend ? console.log('Happy weekend!') : console.log('Happy workweek!')

// `console.log` happens in any case, so we can move the ternary inside it
console.log(isWeekend ? 'Happy weekend!' : 'Happy workweek!')

// we can extract the duplicate “Happy ” and “!” to only write them once
console.log(`Happy ${isWeekend ? 'weekend' : 'workweek'}!`)

// don’t go crazy and extract EVERY duplication; the code becomes shorter
// if we extract the duplicate “w”, but also much harder to read
console.log(`Happy w${isWeekend ? 'eekend' : 'orkweek'}!`)
```
