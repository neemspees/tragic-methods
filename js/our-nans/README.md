# Our NaNs

This is an example of the "quirky" but expected behaviour of the `NaN` (Not a Number) value.
The example uses a wordplay on the word Nan (Grandmother) - just for fun.

---

## The Example

The functions are one of many ways to return a `NaN` value in javascript.
`NaN` values are returned by any equation containing an undefined variable.
```js
const yourNan =  () => {
    let yourMom, yourMomsMom;
    return yourMom + yourMomsMom;
}
```

The function itself returns `NaN`.  
The `isNaN` function is provided by javascript to check if the given value is `NaN` as it is not possible to compare `NaN` to another `NaN` value.

```js
console.log('Is your nan a nan?', yourNan(), isNaN(yourNan()));
```

As mentioned before comparing `NaN` to another (or the same) `NaN` value is not possible and will always return `false`. 
It doesn't matter if a loose (`==`) or strict (`===`) equality operator is used.
```js
console.log('Are our nans the same nan?', yourNan() === myNan(), yourNan() == myNan());
const myGrandmother = myNan();
console.log('wait what?', myGrandmother === myGrandmother);
```
The IEEE 754 spec for floating-point numbers describes that `NaN`s are never equal.
