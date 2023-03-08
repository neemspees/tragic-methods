//Create a regex for the string "Test" with the global flag enabled
const regex = new RegExp(/Test/g);
//Create an array of big strings with content "Testing" to test against
const string = "Testing";

//Run test (Expected result: True; Actual result: True)
console.log(regex.test(string));
//Run test (Expected result: True; Actual result: False)
console.log(regex.test(string));
//Run test (Expected result: True; Actual result: True)
console.log(regex.test(string));
//Run test (Expected result: True; Actual result: False)
console.log(regex.test(string));
// ...
