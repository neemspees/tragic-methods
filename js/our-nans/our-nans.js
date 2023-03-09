//both functions return NaN as one or both variables in the equation are undefined
const yourNan =  () => {
    let yourMom, yourMomsMom;
    return yourMom + yourMomsMom;
}

const myNan =  () => {
    let myMom, myMomsMom;
    return myMom + myMomsMom;
}

//both functions return NaN. isNaN will confirm the NaN value
console.log('Is your nan a nan?', yourNan(), isNaN(yourNan())); // returns Is your nan a nan? NaN true
console.log('Is my nan a nan?', myNan(), isNaN(myNan())); // returns Is my nan a nan? NaN true

//The IEEE 754 spec for floating-point numbers (which is used by all languages for floating-point) says that NaNs are never equal
console.log('Are our nans the same nan?', yourNan() === myNan(), yourNan() == myNan()); //returns Are our nans the same nan? false false
const myGrandmother = myNan();
console.log('wait what?', myGrandmother === myGrandmother); //returns wait what? false
