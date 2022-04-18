export default function getStudentsByLocation(arrStudents, strCity) {
  return arrStudents.filter((x) => x.location === strCity);
}
