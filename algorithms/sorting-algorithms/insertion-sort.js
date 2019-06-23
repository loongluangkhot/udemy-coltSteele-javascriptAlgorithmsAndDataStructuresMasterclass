// My code
// function insertionSort(arr) {
//   for(let i = 1; i < arr.length; i++) {

//     // Find the right position in the sorted left half for unsorted elem
//     let pos = i;
//     for(let j = i - 1; j >= 0; j--) {
//       if(arr[i] < arr[j]) {
//         pos = j;
//       } else {
//         break;
//       }
//     }

//     // Insert the elem
//     if(pos != i) {
//       console.log(arr);
//       let elem = arr.splice(i,1)[0];
//       arr.splice(pos, 0, elem);
//       console.log(arr, elem);
//       console.log("=====");
//     }
//   }

//   return arr;
// }

// Colt's code
function insertionSort(arr) {
  for(let i = 1; i < arr.length; i++) {

    // Find the right position in the sorted left half for unsorted elem
    let elem = arr[i];
    console.log(arr, elem);
    for(let j = i - 1; j >= 0; j--) {
      if(elem < arr[j]) {
        arr[j + 1] = arr[j];
      } else {
        arr[j + 1] = elem;
        break;
      }
    }
    console.log(arr);
    console.log("=====");
  }

  return arr;
}

let arr = [0,2,60,20,3,10,40,6];
console.log(insertionSort(arr));