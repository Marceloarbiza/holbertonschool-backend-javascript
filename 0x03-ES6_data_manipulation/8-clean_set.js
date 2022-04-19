export default function cleanSet(set, startString) {
  for (const item of set) {
    if (item.startsWith(startString)) {
      item.slice(0, startString.length - 1);
    } else {
      set.delete(item);
    }
  }
  return [...set].join('-');

}
