export default function createInt8TypedArray(len, pos, value) {
  const buffer = new ArrayBuffer(len);
  const view = new DataView(buffer);
  view.setInt8(pos, value);
  return view;
}
