class Currency {
  constructor(code, name) {
    this.code = code;
    this.name = name;
  }

  get code() {
    return this.__code;
  }

  set code(code) {
    if (typeof (code) !== 'string') {
      throw new TypeError('code must be a string');
    }
    this.__code = code;
  }

  get name() {
    return this.__name;
  }

  set name(name) {
    if (typeof (name) !== 'string') {
      throw new TypeError('Name must be a string');
    }
    this.__name = name;
  }

  displayFullCurrency() {
    return `${this.name} (${this.code})`;
  }
}

export default Currency;
