import Building from './5-building';

export default class SkyHighBuilding extends Building {
  constructor(sqft, floors) {
    super(sqft);
    this._floors = floors;
    this.evacuationWarningMessage();
  }

  get floors() {
    return this._floors;
  }

  set floors(f) {
    this.floors = f;
  }

  evacuationWarningMessage() {
    return `Evacuate slowly the ${this.floors} floors`;
  }
}
