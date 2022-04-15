export default class Airport {
  constructor(name, code) {
    this._name = name;
    this._code = code;
  }

  get name() {
    return this._name;
  }

  get code() {
    return this._code;
  }

  set name(n) {
    this.name = n;
  }

  set code(c) {
    this.code = c;
  }

  get [Symbol.toStringTag]() {
    return `${this.code}`;
  }
}
