# Infinite Circular Reference

Circular references are not so much unexpected behaviour but can make for some ridiculously looking code.  

---

## The Example
Naming in this example was made intentionally confusing or _funcy_

We create a function `func` that logs a parameter `func`
```js
const func = (func) => console.log(func);
```

Functions in Javascript are also objects which means you can assign properties to them.
We assign the function `func` to the property `func` to make a circular reference.

```js
func.func = func;
```

Making it possible to call on itself indefinitely before executing the function.
```js
func.func.func.func.func/*...*/.func('func')
```
