function pivot(arr, start = 0, end = arr.length) {
  let pivot = arr[start];
  let swapIndex = start;
  for (let i = start + 1; i < end; i++) {
    if (pivot > arr[i]) {
      [arr[swapIndex], arr[i]] = [arr[i], arr[swapIndex]];
      swapIndex++;
    }
  }
  return swapIndex;
}

function quickSort(arr, start = 0, end = arr.length) {
  if (end - start > 1) {
    let pivotIndex = pivot(arr, start, end);
    quickSort(arr, start, pivotIndex);
    quickSort(arr, pivotIndex + 1, end);
  }
  return arr;
}

arr = [5, 2, 1, 8, 4, 3, 7];
console.log(quickSort(arr));
