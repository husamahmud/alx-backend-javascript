export default class Currency {
  constructor(code, name) {
    if (typeof name === 'string') this._name = name;
    else throw TypeError('Name must be a string');

    if (typeof code === 'string') this._code = code;
    else throw TypeError('Name must be a string');
  }

  get name() {
    return this._name;
  }

  get code() {
    return this._code;
  }

  get displayFullCurrency() {
    return `${this.name} (${this.code})`;
  }
}
