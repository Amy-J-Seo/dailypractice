function migratoryBirds(arr) {
  let newArr = {};
  const unique = [...new Set(arr)];
  console.log(unique);
  unique.forEach((elem) => {
    const filterVal = arr.filter((val) => val == elem);
    const totalVal = filterVal.length;
    newArr[elem] = totalVal;
    console.log(newArr);
  });

  let result = Object.entries(newArr).sort(([, a], [, b]) => b - a);
  let final = result[0][0];
  return final;
}

console.log(migratoryBirds([1, 4, 4, 4, 5, 3]));
