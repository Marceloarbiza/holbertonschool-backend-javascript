export default function getStudentIdsSum(arrStudents) {
  return arrStudents.reduce((previousValue, currentValue) => previousValue + currentValue.id, 0);
}
// 0 es el valor en el que va a comenzar previousValue
