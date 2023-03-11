interface Shape {
    name: string;
}

interface Square extends Shape {
    length: number;
}

interface Circle extends Shape {
    radius: number;
}

function disguiseAsCircle(square: Square): Circle {
    const circles: Circle[] = [];
    const shapes: Shape[] = circles; // Problematic

    shapes.push(square);

    return circles[0];
}


const square: Square = { name: 'square of length 10', length: 10 };
const squareDisguisedAsCircle = disguiseAsCircle(square);

console.log(squareDisguisedAsCircle);

// > { "name": "square of length 10", "length": 10 }
