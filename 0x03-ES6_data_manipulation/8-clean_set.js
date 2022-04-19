export default function cleanSet(set, startString) {
  const arr = [];
  if (startString === '') {
    return arr.join('-');
  }
  for (const item of set) {
    if (item.startsWith(startString)) {
      arr.push(item.replace(startString, ''));
    }
  }
  return arr.join('-');
}
