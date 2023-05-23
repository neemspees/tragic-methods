# Array Sorting in JavaScript using `sort()` method and its surprising behavior

<p align="justify">The JavaScript arrays can be confusing for developers that come from strongly typed languages like Java or C#. This means that the following is a valid array:</p>

```javascript
let arr = [4, 20, "hello", "world", function() {return "Hello World";}, [4,20]]
```

<p align="justify">Here, <code>arr</code> contains numbers, strings, another array and a function. What happens if we call sort on this array? The result of sorting is:

```javascript
[20, 4, [4,20], function() {return "Hello World";}, "hello", "world" ]
```

<p align="justify">This might seem randomly sorted, but it isn't. The array <code>sort()</code> method sorts an array in place regardless of data types that reside with in; string array, numbered array, array of objects or any other array are all sorted the same way. Elements are sorted in ascending order, built upon converting elements into strings after which they are sorted according to each character's UTF-16 code value.</p>

```javascript
array.sort()
array.sort(compareFn)
```

> **Note**:
> Everything can be converted to a string, so any array can be sorted in JavaScript.

<p align="justify">So, after learning about the array sort method, what is the result of the following sorting:</p>

```javasript
[1,3,2,10].sort()
```

<p align="justify">If your answer was <code>[1, 2, 3, 10]</code> you would've been wrong because the correct answer is <code>[1, 10, 2, 3]</code>. Default behavior of <code>sort()</code> method in this case produces "incorrect" results if you are expecting the array of numerals to be sorted. So, how can you fix this problem? You can fix it by passing the compare function (<a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Arrow_functions">arrow function</a> in this example) to the sort method:</p>

```javascript
[1,3,2,10].sort((a, b) => a - b)
```

## References
- [JavaScript Array sort](https://www.javascripttutorial.net/javascript-array-sort/)
- [Array.prototype.sort()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/sort)
- [Javascript’s astonishing sort function](https://medium.com/@winwardo/the-principle-of-least-astonishment-and-javascripts-sort-e98a734a30c9)
- [How to sort an array of integers correctly](https://stackoverflow.com/questions/1063007/how-to-sort-an-array-of-integers-correctly)
- [Array.prototype.some ( callbackfn [ , thisArg ] )](https://262.ecma-international.org/13.0/#sec-array.prototype.sort)