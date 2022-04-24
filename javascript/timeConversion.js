const time = "12:45:54PM";

function timeConversion(s) {
  // Write your code here
  let ampm = s.substr(8, 2);
  let hh = parseInt(s.substr(0, 2));
  let rest = s.substr(2, 6);
  if (ampm === "PM") {
    if (hh != "12") {
      hh += 12;
    }
    hh = String(hh);
  } else {
    if (hh === 12) {
      hh = "00";
    } else {
      hh = "0" + String(hh);
    }
  }
  console.log(hh.concat(rest));
  return hh.concat(rest);
}

timeConversion(time);
