<h1 align="center"><b>indexOf without arguments.</b></h1>

String's `indexOf` method returns the position of the argument in the called
string.  For example:

```js
'JavaScript'.indexOf('Script');  // Returns 4.
'JavaScript'.indexOf('Pineapple');  // Returns -1.
```

If the argument isn't a string, it gets coerced to one:

```js
'Copyright 2023'.indexOf(2023);  // Returns 10.
```

When no argument is passed, normally things work as one would expect:

```js
'JavaScript'.indexOf();  // Returns -1.
```

However, sometimes indexOf can return unexpected results:

```js
'drundefineder'.indexOf();  // Returns 2.
```

The issue is that JavaScript always coerces the first argument as a string -- even
if the argument does not exist.  So in this case the first argument is
`undefined` and thus becomes `'undefined'`.  If that sequence of letters exists
in the called string, then it matches.

Affects all versions of JavaScript from ECMA-262 1st edition (June 1997) to present.
