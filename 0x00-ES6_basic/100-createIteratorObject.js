export default function createIteratorObject(report) {
  const lires = [];
  const li = Object.values(report.allEmployees);
  for (const x of li) {
    for (const y of x) {
      lires.push(y);
    }
  }
  return lires;
}
