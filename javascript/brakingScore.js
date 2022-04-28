function breakingRecords(scores) {
  // Write your code here
  const arr = scores;

  let max = scores[0];
  let low = scores[0];
  let countM = 0;
  let countL = 0;
  for (let i = 1; i < scores.length; i++) {
    if (arr[i] > max) {
      console.log(arr[i], "----", max);
      max = arr[i];
      countM++;
    }
    if (arr[i] < low) {
      console.log(arr[i], "----", low);
      low = arr[i];
      countL++;
    }
  }
  console.log(countM, "    ----     ", countL);
  return [countM, countL];
}

const a = [10, 5, 20, 20, 4, 5, 2, 25, 1];
breakingRecords(a);
