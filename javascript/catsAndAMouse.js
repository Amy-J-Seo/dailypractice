function catAndMouse(x, y, z) {
  const catA = z - x;
  const catB = z - y;

  if (catA > catB) {
    return catB;
  } else if (catB > catA) {
    return catA;
  } else {
  }
}
