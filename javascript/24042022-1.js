const arr = [-4, 3, -9, 0, 4, 1];

function plusMinus(arr) {
  let pos = 0;
  let neg = 0;
  let zero = 0;
  // Write your code here
  const n = arr.length;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < 0) {
      neg++;
    } else if (arr[i] > 0) {
      pos++;
    } else {
      zero++;
    }
  }
  let a = pos / n;

  let calcArr = [];
  calcArr[0] = a.toFixed(6);
  calcArr[1] = (neg / n).toFixed(6);
  calcArr[2] = (zero / n).toFixed(6);
  console.log(calcArr[0] + "\n", calcArr[1] + "\n", calcArr[2] + "\n");
}

plusMinus(arr);
