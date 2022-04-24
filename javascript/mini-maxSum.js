const arr = [5, 5, 5, 5, 5];

function miniMaxSum(arr) {
  // Write your code here
  const getMax = Math.max.apply(null, arr);
  const getMin = Math.min.apply(null, arr);

  let minSum = 0;
  let maxSum = 0;
  if (getMax === getMin) {
    arr.map((item) => {
      minSum += item;
    });
    minSum -= arr[0];
    console.log(minSum, minSum);
  } else {
    arr.map((item) => {
      if (item != getMax) {
        minSum += item;
      }
    });
    arr.map((item) => {
      if (item != getMin) {
        maxSum += item;
      }
    });
    console.log(minSum, maxSum);
  }
}

miniMaxSum(arr);
