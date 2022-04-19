export default function cleanSet(set, startString) {
  const arr = [];
  for (const item of set) {
    if (item.startsWith(startString) && startString.length > 0) {
      arr.push(item.replace(startString, ''));
    }
  }
  return arr.join('-');
}
