function birthday(s, d, m) {
  // Write your code here
  const day = m[0];
  const month = m[1];
  let result = 0;
  for (let i = 0; i < d.length; i++) {
    let sum = 0;
    for (let j = i; j < i + month; j++) {
      if (i + month <= d.length) {
        sum += d[j];
        console.log("individual items in second loop", d[j]);
        console.log("sum check", sum);
      }
    }
    if (day === sum) {
      console.log("this same", day);
      result++;
    }
  }
  console.log("checking result", result);
}

birthday(5, [1, 2, 1, 3, 2], [3, 2]);
