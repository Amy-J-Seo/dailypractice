const arr = [
  [1, 2, 3],
  [4, 5, 6],
  [9, 8, 9],
];

function diagonalDifference(arr) {
  // Write your code here
  let numRL = 0;
  let numLR = 0;
  const n = arr.length;
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length; j++) {
      if (i === j) {
        numRL += arr[i][j];
      }
      if (i + j === n - 1) {
        numLR += arr[i][j];
      }
    }
  }
  return Math.abs(numRL - numLR);
}

diagonalDifference(arr);
