// My code

// function swap(arr, i, j) {
//   let temp = arr[i];
//   arr[i] = arr[j];
//   arr[j] = temp;
//   return arr;
// }

// function bubbleSort(arr) {
//   let lastUnsortedIndex = arr.length - 1;
//   while(lastUnsortedIndex > 0) {
//     let noSwap = true;
//     for(let i = 0; i < lastUnsortedIndex; i++) {
//       console.log(arr, arr[i], arr[i + 1]);
//       if(arr[i] > arr[i + 1]) {
//         arr = swap(arr, i, (i + 1));
//         noSwap = false;
//       }
//     }
//     lastUnsortedIndex--;
//     console.log("one pass completed!");
//     if(noSwap) break;
//   }
//   return arr;
// }

// Colt's code
function bubbleSort(arr) {
  for(let i = 0; i < arr.length; i++) {
    let noSwap = true;
    for(let j = 0; j < arr.length - (i + 1); j++ ) {
      console.log(arr, arr[j], arr[j + 1]);
      if(arr[j] > arr[j + 1]) {
        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
        noSwap = false;
      }
    }
    console.log("=====");
    if(noSwap === true) break;
  }
  return arr;
}

let arr = [60,20,3,10,40,6];
console.log(bubbleSort(arr));