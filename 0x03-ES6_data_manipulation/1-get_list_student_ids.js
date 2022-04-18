export default function getListStudentIds(array) {
  if (Array.isArray(array) === false) {
    return [];
  }
  const idsArray = array.map((x) => x.id);
  return idsArray;
}
