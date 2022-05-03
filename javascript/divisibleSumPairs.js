function divisibleSumPairs(n, k, ar) {
  // Write your code here
  let arr = [];
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      console.log("checking, ", ar[i], ar[j]);
      if (i < j) {
        if ((ar[i] + ar[j]) % k === 0) {
          console.log(ar[i], ar[j]);
          arr.push([ar[i], ar[j]]);
        }
      }
    }
  }
  console.log(arr.length);
  return arr.length;
}

divisibleSumPairs(6, 3, [1, 3, 2, 6, 1, 2]);
