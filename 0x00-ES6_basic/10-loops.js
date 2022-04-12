export default function appendToEachArrayValue(array, appendString) {
  const arrNew = [];
  for (const idx of array) {
    arrNew.push(appendString.concat(idx));
  }

  return arrNew;
}
