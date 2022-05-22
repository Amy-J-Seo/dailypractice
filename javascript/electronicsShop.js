function getMoneySpent(keyboards, drives, b) {
  /*
   * Write your code here.
   */
  let sortKeyboards = keyboards.sort((a, b) => b - a);
  let sortDrives = drives.sort((a, b) => b - a);

  let total = 0;
  for (let i = 0; i < sortKeyboards.length; i++) {
    for (let j = 0; j < sortDrives.length; j++) {
      if (
        sortKeyboards[i] + sortDrives[j] <= b &&
        sortKeyboards[i] + sortDrives[j] > total
      ) {
        total = sortKeyboards[i] + sortDrives[j];
      }
    }
  }
  console.log("toital", total);
  if (total == 0) {
    return -1;
  } else {
    return total;
  }
}

getMoneySpent([4], [5], 5);
