const arr = [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1];
function birthdayCakeCandles(candles) {
  // Write your code here
  const getMax = Math.max.apply(null, candles);
  console.log(getMax);
  let num = 0;
  candles.forEach((item) => {
    if (item === getMax) {
      num++;
    }
  });
  console.log(num);
  return num;
}

birthdayCakeCandles(arr);
