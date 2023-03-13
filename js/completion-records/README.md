<h1 align="center"><b>Conflicting Completion Records.</b></h1>

What does this function return?

```js
function foo() {
  try {
    return true;
  } finally {
    return false;
  }
  return null;
}
```

In JavaScript `return` generates a "Completion Record" which specifies an
intention.  This record may be overriden.  The code snippet above hits the
`return true` and writes a completion record intending to return `true`.
Then the `finally` clause is called, and the `return false` overwrites the
earlier record.  The `return null` is never reached.  Thus `false` is the
final return value.

The same rules also apply to `break` and `continue`.  Consider the following:

```js
function bar() {
  for (var i = 0; i < 10; i++) {
    try {
      return i;
    } finally {
      continue;
    }
  }
  return null;
}
```

Affects all versions of JavaScript from ECMA-262 1st edition (June 1997) to present.
The same behaviour is present in Java, Python, C, and most other languages.
