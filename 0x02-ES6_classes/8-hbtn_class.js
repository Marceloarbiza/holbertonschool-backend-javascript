export default class HolbertonClass {
  constructor(size, location) {
    this._size = size;
    this._location = location;
  }

  get size() {
    return this._size;
  }

  get location() {
    return this._location;
  }

  set location(l) {
    this.location = l;
  }

  set size(z) {
    this.size = z;
  }
  [Symbol.toPrimitive](hint) {
    if (hint === 'number') {
      return this.size;
    }
    return this.location;
  }
}
