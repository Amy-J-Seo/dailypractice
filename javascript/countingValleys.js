function countingValleys(steps, path) {
  // Write your code here
  let mount = 0;
  let valley = 0;
  let seaLevel = 0;

  for (let i = 0; i <= path.length; i++) {
    if (path[i] == "D") {
      seaLevel--;
    } else {
      if (seaLevel == -1) {
        valley++;
      }
      seaLevel++;
    }
  }
  console.log(valley);
  return valley;
}

countingValleys(8, ["U", "D", "D", "D", "U", "D", "U", "U"]);
