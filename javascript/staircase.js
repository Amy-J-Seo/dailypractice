function staircase(n) {
  // Write your code here
  let str = "";
  let stair = "";
  for (let i = 1; i <= n; i++) {
    str = " ".repeat(n - i);
    stair = "#".repeat(i);
    console.log(str + stair);
  }
}

staircase(6);
