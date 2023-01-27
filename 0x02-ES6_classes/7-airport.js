export default class Airport {
  constructor(name, code) {
    this._name = name;
    this._code = code;
  }
export default class Airport {
  constructor(name, code) {
    this._name = name;
    this._code = code;
  }

  toString() {
    return `[object ${this._code}]`;
  }
}
