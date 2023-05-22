console.log([1, 3, 2, 10].sort())
// Prints [1, 10, 2, 3] due to the default behavior of the sort() method.
// In order to get the sorting of numerical values, you will need to write a compare function.

console.log([1, 3, 2, 10].sort((a, b) => a - b))
// Prints [1, 2, 3, 10].

console.log([1, 3, 2, 10].sort(function(a, b) {return a - b}))
// Prints [1, 2, 3, 10].

console.log([1, 3, 2, 10].sort(function(a, b) {return a > b ? 1 : a < b ? -1 : 0}))
// Prints [1, 2, 3, 10].

console.log(Array.from(Int8Array.from([1, 3, 2, 10]).sort()))
// Prints [1, 2, 3, 10].