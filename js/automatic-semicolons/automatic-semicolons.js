// JS inserts semicolons in situations where statements span multiple lines

function automatic() {
    return
      "i won't return"
  }

let res = automatic();

console.log(res === undefined);

// ever wonder why IIFE's sometimes have semicolons placed in front of them?
res = 1 + 2;
;(function () {
    console.log(res);
})();
