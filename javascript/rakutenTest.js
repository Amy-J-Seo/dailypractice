const str = "baacba";

function small(str) {
  let arr = str.split("");
  console.log(arr);
  arr.sort((a, b) => {
    console.log(a, "~~~~", b);
    if (a != b) {
      if (a > b) {
        console.log(a, "--", b);
        return 1;
      }
    }
  });
  console.log(arr.join(""));
}

small(str);
