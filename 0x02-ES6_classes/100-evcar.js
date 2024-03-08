import Car from './10-car';

export default class EVCar extends Car {
  constructor(brand, motor, color, range) {
    if (typeof brand !== 'string') {
      throw new TypeError('brand must be a string');
    }
    if (typeof motor !== 'string') {
      throw new TypeError('motor must be a string');
    }
    if (typeof color !== 'string') {
      throw new TypeError('color must be a string');
    }
    if (typeof range !== 'string') {
      throw new TypeError('range must be a string');
    }
    super(brand,motor,color);
    this._range = range;
   }

  get brand() {
    return this._range;
  }

  set brand(brand) {
    if (typeof brand !== 'string') {
      throw new TypeError('brand must be a string');
    }
    this._brand = brand;
  }

  cloneCar() {
    const Species = super.constructor[Symbol.species];
    return new Species();
  }
}
