function catAndMouse(x, y, z) {
  let catA;
  if (x > z) {
    catA = x - z;
  } else {
    catA = z - x;
  }
  let catB;
  if (y > z) {
    catB = y - z;
  } else {
    catB = z - y;
  }
  console.log(catA, "===", catB);
  if (catA > catB) {
    return "Cat B";
  } else if (catB > catA) {
    return "Cat A";
  } else {
    return "Mouse C";
  }
}

console.log(catAndMouse(47, 30, 6));
