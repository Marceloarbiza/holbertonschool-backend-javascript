export default function iterateThroughObject(reportWithIterator) {
  let str = '';
  for (const idx in reportWithIterator) {
    if (idx == reportWithIterator.length - 1) {
      str += reportWithIterator[idx];
    } else {
      str += `${reportWithIterator[idx]} | `;
    }
  }
  return str;
}
