const grades = [73, 67, 38, 33];

function gradingStudents(grades) {
  // Write your code here
  let newarr = [];
  grades.map((item) => {
    if (item < 38) {
      newarr.push(item);
    } else if ((item + 2) % 5 === 0) {
      newarr.push(item + 2);
    } else if ((item + 2) % 5 === 1) {
      newarr.push(item + 1);
    } else {
      newarr.push(item);
    }
  });

  return newarr;
}

gradingStudents(grades);
