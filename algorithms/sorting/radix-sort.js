function getDigit(num, place) {
  let floor = Math.floor(Math.abs(num) / (10 ** place));
  let remainder = floor % 10;
  return remainder;
}

function digitCount(num) {
  return Math.floor(Math.log10(Math.abs(num))) + 1;
}

function mostDigits(nums) {
  let maxDigits = 0;
  for(let i = 0; i < nums.length; i++) {
    maxDigits = Math.max(maxDigits, digitCount(nums[i]));
  }
  return maxDigits;
}

function radixSort(nums) {
  let buckets = {};
  for(let i = 0; i < mostDigits(nums); i++) {
    for(let b = 0; b < 10; b++) {
      buckets[b] = [];
    }
    for(let j = 0; j < nums.length; j++) {
      let digit = getDigit(nums[j], i);
      buckets[digit].push(nums[j]);
    }
    nums = [];
    for(let k = 0; k < 10; k++) {
      nums = nums.concat(buckets[k]);
    }
    console.log(nums, i);
  }
  return nums;
}

console.log(radixSort([1,2,123,23123,22,312,23]));
