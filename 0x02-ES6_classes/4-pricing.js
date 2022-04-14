import Currency from './3-currency';

export default class Pricing {
  constructor(amount, currency) {
    if (!(currency instanceof Currency)) {
      throw TypeError('Is not Currency type');
    }
    this._currency = currency;
    if (typeof amount !== 'number') {
      throw TypeError('Is not a number');
    }
    this._amount = amount;
  }

  get amount() {
    return this._amount;
  }

  set amount(amount) {
    this.amount = amount;
  }

  get currency() {
    return this._currency;
  }

  set currency(currency) {
    this.currency = currency;
  }

  displayFullPrice() {
    return `${this.amount} ${this.currency.displayFullCurrency()}`;
  }

  static convertPrice(amount, conversionRate) {
    return amount * conversionRate;
  }
}
