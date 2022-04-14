import Currency from './3-currency';

export default class Pricing {
  constructor(amount, currency) {
    this._amount = amount;
    this._currency = currency;
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
    return `${this.ampunt} ${this.currency.displayFullCurrency()}`;
  }
}
