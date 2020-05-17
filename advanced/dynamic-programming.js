// Dynamic programming
// Appropriate for problems that exhibit two properties
// (1) overlapping subproblems: the problem can be broken down into subproblems whose solution can be reused
// (2) optimal substructure: the optimal solution to the main problem is the "sum" of the optimal solution to the overlapping subproblems

// Simple fib: O(2^n)
function fibSimple(n) {
  if (n <= 2) return 1;
  return fib(n - 1) + fib(n - 2);
}

// Fib with memoization (top-down): O(n)
function fibMemo(n) {
  const memo = {};
  function fib(n) {
    if (memo[n]) return memo[n];
    memo[n] = n <= 2 ? 1 : fib(n - 1) + fib(n - 2);
    return memo[n];
  }
  return fib(n);
}

// Fib with tabulation (btm-up): O(n), but better space complexity than memoization
function fibTab(n) {
  if (n <= 2) return 1;
  const fibNums = [0, 1, 1];
  for (let i = 3; i <= n; i++) {
    fibNums.push(fibNums[i - 1] + fibNums[i - 2]);
  }
  return fibNums[n];
}

let num = 10000;
console.log(fibMemo(num)); // RangeError: Maximum call stack size exceeded
console.log(fibTab(num)); // Return Infinity
