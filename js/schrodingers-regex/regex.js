//Create a regex for the string "Test" with the global flag enabled
const regex = new RegExp(/Test/g);
//Create a "big" string with content "Testing" to test against
const bigString = "Testing";

//Run test (Expected result: True; Actual result: True)
console.log(regex.test(bigString));
//Run test (Expected result: True; Actual result: False)
console.log(regex.test(bigString));
//Run test (Expected result: True; Actual result: True)
console.log(regex.test(bigString));
//Run test (Expected result: True; Actual result: False)
console.log(regex.test(bigString));
// ...
