<h1 align="center"><b>Schrodinger's regex</b></h1>

Regular expressions in javascript can be funky.<br>Let's look at an example.

---

<h2 align="center">The Example</h2>

You have a regular expression with a global flag. You want to check a string for the word ``Test``. You have a big string that you want to run this regex against. You need to check if a match exists and if it does get all matches for the string and do something with them. You create a new regex object:

```js
const regex = new RegExp(/Test/g);
```

Since regexes are expensive operations we first run a ``regex.test()`` against our string to check if any matches even exist.

```js
const string = "Testing";
if (regex.test(string)) {
    matches = regex.exec(string);
    // Do stuff
}
```

This code is OK. But imagine we needed to run the same regex multiple times on the same string:

```js
const string = "Testing";
if (regex.test(string)) {
    matches = regex.exec(string);
    // Do stuff once
}
//Do something else
if (regex.test(string)) {
    matches = regex.exec(string);
    // Do stuff again
}
```

Due to the way that javascript handles regular expressions, this code is flawed.

---

<h2 align="center">Stateful RegExp objects and flags.</h2>

You would think that just checking if a regex exists inside our big string using ``regex.test()`` multiple times would return the same value every time, right?<br>Not necessarily.

In the above example we use a ``global`` flag in our regex.

From the *[MDN Web Docs](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/RegExp/global)* :
> The ``global`` accessor property indicates whether or not the ``g`` flag is used with the regular expression. The ``g`` flag indicates that the regular expression should be tested against all possible matches in a string.

When we set the ``global`` (or ``sticky``) flag on a javascript RegExp object, it becomes stateful.

From the *[MDN Web Docs](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/RegExp/test)* :
> JavaScript ``RegExp`` objects are **stateful** when they have the ``global`` or ``sticky`` flags set (e.g., ``/foo/g`` or ``/foo/y``). They store a ``lastIndex`` from the previous match. Using this internally, ``test()`` can be used to iterate over multiple matches in a string of text (with capture groups).

This behaviour does not affect us as long as we don't have a ``global`` or ``sticky`` flag set, or test the same thing twice. This is why the first code snippet is functional, but the second code snippet breaks. Since we have the global flag set, when we run the same code multiple times it will not return the same result since due to the existance of ``lastIndex`` the code will not be checking the regex against the string we think it is checking it against.

---

<h2 align="center">How to fix this?</h2>

If you really need a global or sticky flag in your regular expression, and need to use it multiple times, run it once and save the result in a variable, create an entirely new test every time, or some other similar solution.
