function naiveStringSearch(str, substr) {
  // To store indices of matches
  let matches = [];

  // Loop over the longer string
  for(let i = 0; i < str.length; i++) {
    // Loop over the shorter string
    for (let j = 0; j < substr.length; j++) {
      // If chars don't match, break out of inner loop
      if(str[i + j] !== substr[j]) {
        break;
      } else if (j === substr.length - 1) {
        matches.push(i);
      }
    }
  }
  return matches;
}

let str = "loire";
let substr = "omg";
console.log(naiveStringSearch(str, substr));