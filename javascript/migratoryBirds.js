function migratoryBirds(arr) {
  // Write your code here
  const watchedObj = {};

  const uniqueArr = [...new Set(arr)];
  for (let i = 0; i < arr.length; i++) {
    watchedObj[arr[i]] = 0;
  }
  for (let i = 0; i < arr.length; i++) {
    Object.entries(uniqueArr).forEach(([key, value]) => {
      console.log(`${key}: ${value}`);
      if (arr[i] == value) {
        watchedObj[arr[i]]++;
      }
    });
  }
  console.log("result", watchedObj);
  let valArr = [];
  Object.entries(watchedObj).forEach(([key, value]) => {
    valArr.push(value);
  });
  valArr.sort();
  let item = valArr[valArr.length - 1];
  console.log(Object.keys(valArr).find((key) => valArr[key] === item));
  console.log("arr>???", valArr);
  return Object.keys(watchedObj).find((key) => {
    if (watchedObj[key] === item) {
      return key;
    }
  });
}

migratoryBirds([1, 4, 4, 4, 5, 3]);
