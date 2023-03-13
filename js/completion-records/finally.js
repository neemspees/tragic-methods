function foo() {
  try {
    return true;
  } finally {
    return false;
  }
  return null;
}
console.log(foo());  // Returns false.


function bar() {
  for (var i = 0; i < 10; i++) {
    try {
      return i;
    } finally {
      continue;
    }
  }
  return null;
}
console.log(bar());  // Returns null.
