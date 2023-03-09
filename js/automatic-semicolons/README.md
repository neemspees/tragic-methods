# Automatic Semicolon Insertion in JavaScript

## Tested using

Node.js v19.7.0

## Explanation

[Automatic semicolon insertion](https://en.wikipedia.org/wiki/Lexical_analysis#Semicolon_insertion) is present in a few languages, but JavaScript's implementation has a few special rules.

One being the expression after one of the keywords `return`, `throw`, or `yield` must be on the same line as the keyword itself.

Example:

```js
function automatic() {
    return
      "i won't return"
  }

let res = automatic();

console.log(res === undefined); // true
```

What happened here? Since the return statement is on a separate line, the JavaScript interpreter added some semicolons for us. This is how the above function gets parsed.

```js
function automatic() {
    return;
      "i won't return";
  }
```

Fixing this is simple enough, just put your return statement on the same line.

---

Another rule is for opening paranthesis, [without a semicolon, the two lines together are treated as a CallExpression.](https://tc39.es/ecma262/#sec-asi-interesting-cases-in-statement-lists)

This can lead to issues with [IIFEs](https://developer.mozilla.org/en-US/docs/Glossary/IIFE), functions that are run as soon as they are defined.

Example:

```js
// note lack of semicolon after 2
let res = 1 + 2
(function () {
    console.log(res);
})();
```

We get a TypeError trying to run this. Specifically:

```sh
(function () {
^

TypeError: 2 is not a function
    at Object.<anonymous> (/workspaces/tragic-methods/js/automatic-semicolons/automatic-semicolons.js:14:1)
    at Module._compile (node:internal/modules/cjs/loader:1275:14)
    at Module._extensions..js (node:internal/modules/cjs/loader:1329:10)
    at Module.load (node:internal/modules/cjs/loader:1133:32)
    at Module._load (node:internal/modules/cjs/loader:972:12)
    at Function.executeUserEntryPoint [as runMain] (node:internal/modules/run_main:83:12)
    at node:internal/main/run_main_module:23:47
```

What's happening here? The above statement is getting evaluated as one expression:

```js
let res = 1 + 2() { console.log(res) };
```

Again, the fix is simple:

```js
let res = 1 + 2;
;(function () {
    console.log(res); // 3
})();
```

> **Note**
> These issues are pretty easy to avoid using linting and formatting tools like ESLint to enforce semicolons.

## References 

* [MDN - JavaScript Lexical Grammar](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Lexical_grammar#automatic_semicolon_insertion)
