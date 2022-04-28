function kangaroo(x1, v1, x2, v2) {
  // Write your code here
  while (true) {
    if (v1 <= v2) return "NO";
    x1 = x1 + v1;
    x2 = x2 + v2;
    if (x1 == x2) return "YES";
    if (x1 > x2) return "NO";
  }
}
