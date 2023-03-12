# Reference covariance

A reference of a subtype can be assigned to a reference of its supertype, this seems logical at first glance because every subtype is compatible with its supertype.

## Tested using
Version: TypeScript 4.9.5

## Explanation

```typescript
const circles: Circle[] = [];
const shapes: Shape[] = circles;
```

The only problem with this, is that the array of `Shapes` is a reference to the array of `Circles` and **not** a clone. This means that, if you add an element of a different subtype of `Shape` to the array of `Shapes`, it will also be added to the array of `Circles`.

```typescript
function disguiseAsCircle(square: Square): Circle {
    const circles: Circle[] = [];
    const shapes: Shape[] = circles;

    shapes.push(square);

    return circles[0];
}
```

Meaning this function will successfully compile and return a `Square` even though we specifically expect a `Circle` as a return type.

```typescript
const square: Square = { name: 'square of length 10', length: 10 };
const squareDisguisedAsCircle = disguiseAsCircle(square);

console.log(squareDisguisedAsCircle);

// > { "name": "square of length 10", "length": 10 }
```

This is not restricted to arrays, take for example a generic interface. This would still compile:

```typescript
interface Reference<T> {
    value?: T;
}

function disguiseAsCircle(square: Square): Circle|undefined {
    const circleRef: Reference<Circle> = {};
    const shapeRef: Reference<Shape> = circleRef; // Problematic

    shapeRef.value = square;

    return circleRef.value;
}
```
