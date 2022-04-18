export default function updateStudentGradeByCity(arrStudents, strCity, arrNewGrades) {
  return arrStudents.filter((x) => x.location === strCity).map((z) => {
    const found = arrNewGrades.find((obj) => obj.studentId === z.id);
    if (found) {
      return { ...z, grade: found.grade };
    } else {
      return { ...z, grade: 'N/A' };
    }
  });
}
