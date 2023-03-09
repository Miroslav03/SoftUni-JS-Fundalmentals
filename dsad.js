function calculateGrades(input) {
  const grades = new Map();

  for (const line of input) {
    const [name, ...newGrades] = line.split(' ');

    if (grades.has(name)) {
      const existingGrades = grades.get(name);
      grades.set(name, existingGrades.concat(newGrades.map(Number)));
    } else {
      grades.set(name, newGrades.map(Number));
    }
  }

  const sortedStudents = Array.from(grades.keys()).sort();

  for (const student of sortedStudents) {
    const studentGrades = grades.get(student);
    const averageGrade = studentGrades.reduce((acc, curr) => acc + curr, 0) / studentGrades.length;
    console.log(`${student}: ${averageGrade.toFixed(2)}`);
  }
}calculateGrades(['Steven 3 5 6 4',
'George 4 6',
'Tammy 2 5 3',
'Steven 6 3'])