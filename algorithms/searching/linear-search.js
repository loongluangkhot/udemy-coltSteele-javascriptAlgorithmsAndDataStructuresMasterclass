function linearSearch(arr, val) {
  for(let i = 0; i < arr.length; i++) {
    if(arr[i] === val) {
      return i;
    }
  }
  return false;
}

let arr = ["Chicago", "Madison", "Milwaukee", "New York", "Philadelphia", "Los Angeles", "San Francisco", "Boston"];
let elem = "Milwaukee";
console.log(linearSearch(arr, elem));