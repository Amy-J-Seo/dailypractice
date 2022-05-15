function sockMerchant(n, ar) {
  // Write your code here
  let unique = [...new Set(ar)];
  let pairs = 0;
  for (let i = 0; i < unique.length; i++) {
    let colour = unique[i];
    let checkSockNum = 0;
    ar.map((item) => {
      if (item == colour) {
        checkSockNum++;
      }
    });
    console.log("colour", colour, "num of sock", checkSockNum);
    if (Math.floor(checkSockNum / 2 !== 0)) {
      pairs = pairs + Math.floor(checkSockNum / 2);
    }
  }
  return pairs;
}

sockMerchant(9, [10, 20, 20, 10, 10, 30, 50, 10, 20]);
