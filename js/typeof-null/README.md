<h1  align="center"><b>typeof null === "object"</b></h1>

Devlopers can use JavaScript's `typeof` operator to get the type of something. For example:

```js
typeof "hello"; // Evaluates to "string"

typeof { hello: "world" }; // Evaluates to "object"
```

This is incredibly handy, but using it with `null` can easily introduce bugs. That's because `typeof null` evaluates to `"object"`:

```js
typeof null; // "object"
```

If you're reading this and thinking that seems like bizarre, counterintuitive behavior, you're right!

## Example

Let's see an example of how this could be problematic in practice. Imagine a developer wants to write a function that's responsible for returning the value of the `description` property on an object, or `undefined` if the argument provided isn't an object or doesn't have a `description` property. They may attempt to write something like this:

```js
function getDescription(value) {
  if (typeof value !== "object") {
    return undefined;
  }

  if (!value.hasOwnProperty("description")) {
    return undefined;
  }

  return value.description;
}
```

At first glance, this looks like it should work as expected. The `if (typeof value !== "object")` guard clause ensures that the value we're dealing with is an object and `if (!value.hasOwnProperty('description'))` ensures that that object has a `description` poperty. If those checks pass, then the value of `value.description` is returned. What could go wrong?

Despite the initial appearance of correctness, this function is buggy when called with `null` as an argument. Since `typeof null` evaluates to `"object"`, the first guard clause passes. The code after that continues to execute and the `.hasOwnProperty()` method is called on `null`. `null` of course has no such method, so a `TypeError` is thrown.

### Example usage

```js
getDescription({ description: "New product" });
// Returns "New product"

getDescription("hello");
// Returns `undefined`

getDescription(null);
// Uncaught TypeError: Cannot read properties of null (reading 'hasOwnProperty')
```

To fix this particular function, the first check would need to be updated to `typeof value !== "object" && value !== null`, or the developer would need to verify whether the argument provided is a true object by some other means. (Side note: don't forget that in JavaScript, an array is a type of object, too!)

## Moral of the Story

Whenever you're doing type checking, don't assume that something with a type of "object" is in fact an object (as silly as that may sound!). Always account for the possibility of a `null` value and check for that explicitly.

## More Info

The MDN page on `typeof` provides historical information on why `typeof null` evaluates to "object", if you care to dig a bit deeper:
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/typeof#typeof_null
