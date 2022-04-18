export default function cleanSet(set, startString) {
  for (let item of set) {
    if (!item.startsWith(startString)) {
      set.delete(item);
    } else {
      item.replace(startString, 'asda');
    }
  }
  return [...set].join('-');
}
