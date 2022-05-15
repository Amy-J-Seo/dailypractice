function bonAppetit(bill, k, b) {
  // Write your code here
  let total = 0;
  for (let i = 0; i < bill.length; i++) {
    if (i !== k) {
      total = total + bill[i];
    }
  }
  //   console.log(total, '--', b,'---', b-(total/2))
  if (b === total / 2) {
    console.log("Bon Appetit");
  } else {
    console.log(b - total / 2);
  }
}

bonAppetit([3, 10, 2, 9], 1, 7);
