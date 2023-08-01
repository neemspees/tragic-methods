# Comparison of three numbers

If you thought you were good at comparing numbers, think again. This quirky Javascript code compares the numbers 1, 2 and 3 with less- and greater than operators. The result however is not the same.

## The Example

```js
1 < 2 < 3; // true
3 > 2 > 1; // false
```

Both statements should be true right? Well, the problem is the first part of the expression, this gets handled first.

```js
1 < 2 < 3; // 1 < 2 -> true
true < 3; // true -> 1
1 < 3; // true

3 > 2 > 1; // 3 > 2 -> true
true > 1; // true -> 1
1 > 1; // false
```

Should you want to fix the statement you could use the following.

```js
3 > 2 >= 1; // true
```

This has all to do with how relational operators work. Should you want to read more about it, check out the [MDN web docs](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators).
