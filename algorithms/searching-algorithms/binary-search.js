// My code
// function binarySearch(arr, val) {
//   let start = 0;
//   let end = arr.length - 1;
//   let mid = Math.floor(arr.length / 2);
//   function search(start, end) {
//     let mid = Math.floor((start + end) / 2);
//     if(start === end) {
//       if(arr[mid] === val) {
//         return mid;
//       } else {
//         return false;
//       }
//     } else {
//       if(arr[mid] === val) {
//         return mid;
//       } else if(arr[mid] < val) {
//         return search(mid + 1, end)
//       } else {
//         return search(start, mid - 1);
//       }
//     }
//   }
//   return search(start, end);
// }

// Colt's code
function binarySearch(arr, elem) {
  let start = 0;
  let end = arr.length - 1;
  let mid = Math.floor((start + end) / 2);
  while(arr[mid] !== elem && start <= end) {
    if(elem < arr[mid]) {
      end = mid - 1;
    } else {
      start = mid + 1;
    }
    mid = Math.floor((start + end) / 2);
  }
  return arr[mid] === elem ? mid : -1;
}

let arr = [0,5,10,15,20,25,30,35,40,45];
let elem = 25;
console.log(binarySearch(arr, elem));