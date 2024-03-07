export default class Airport {
  constructor(name, code) {
    if (typeof name !== 'string') {
      throw new TypeError('name must be a string');
    }
    if (typeof code !== 'string') {
      throw new TypeError('code must be a string');
    }

    this._name = name;
    this._code = code;
  }

  get name() {
    return this._name;
  }

  get code() {
    return this._code;
  }

  set name(name) {
    if (typeof name !== 'string') {
      throw new TypeError('name must be a string');
    } else {
      this._name = name;
    }
  }

  set code(code) {
    if (typeof code !== 'string') {
      throw new TypeError('code must be a string');
    } else {
      this._code = code;
    }
  }

  get [Symbol.toStringTag]() {
    return this._code;
  }
}
