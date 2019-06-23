// My code
// function selectionSort(arr) {
//   for(let i = 0; i < arr.length - 1; i++) {
//     // Find min index
//     let minIndex = i;
//     for(let j = i; j < arr.length; j++) {
//       if(arr[j] < arr[minIndex]) {
//         minIndex = j;
//       }
//     }

//     // Push min elem to the front
//     console.log(arr, arr[minIndex]);
//     let minElem = arr.splice(minIndex, 1);
//     arr.splice(i, 0, ...minElem);
//   }
//   return arr;
// }

// Colt's code
function selectionSort(arr) {
  for(let i = 0; i < arr.length - 1; i++) {
    // Find min index
    let minIndex = i;
    for(let j = i + 1; j < arr.length; j++) {
      if(arr[j] < arr[minIndex]) {
        minIndex = j;
      }
    }

    // Swap smallest position to front
    if(i !== minIndex) {
      console.log(arr, arr[minIndex]);
      [arr[i], arr[minIndex]] = [arr[minIndex], arr[i]];
    }
  }
  return arr;
}

let arr = [0,2,60,20,3,10,40,6];
console.log(selectionSort(arr));