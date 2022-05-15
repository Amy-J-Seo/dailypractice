function pageCount(n, p) {
  // Write your code here

  //   let front = Math.ceil((p - 1) / 2);
  //   let back = Math.floor((n - p) / 2);
  //   console.log(front, "==checking=", back);
  //   if (front < back) {
  //     console.log(front);
  //     return front;
  //   } else if (front > back) {
  //     console.log(back);
  //     return back;
  //   } else {
  //     return 0;
  //   }
  let lastPage = Math.floor(n / 2);
  let page = Math.floor(p / 2);
  return Math.min(page, lastPage - page);
}

pageCount(4, 4);
