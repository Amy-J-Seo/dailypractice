function migratoryBirds(arr) {
  let largest = 1;
  let counter = largest;
  let type = 0;
  arr.sort();

  for (let i = 0; i < arr.length; i++) {
    largest = arr.lastIndexOf(arr[i]) - arr.indexOf(arr[i]) + 1;
    if (largest > counter) {
      counter = largest;
      type = arr[i];
    }
  }
  return type;
}

console.log(migratoryBirds([1, 2, 3, 4, 5, 4, 3, 2, 1, 3, 4]));
