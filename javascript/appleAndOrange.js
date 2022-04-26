function countApplesAndOranges(s, t, a, b, apples, oranges) {
  // Write your code here
  let appleLand = 0;
  let orangeLand = 0;
  apples.forEach((item) => {
    if (a + item >= s && a + item <= t) {
      appleLand++;
    }
  });
  oranges.forEach((item) => {
    if (b + item >= s && b + item <= t) {
      orangeLand++;
    }
  });
  console.log(appleLand);
  console.log(orangeLand);
}

countApplesAndOranges(7, 10, 4, 12, [2, 3, -4], [3, -2, -4]);
