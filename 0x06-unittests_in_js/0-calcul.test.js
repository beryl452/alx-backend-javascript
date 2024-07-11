const assert = require('assert');
const calculateNumber = require('./0-calcul');

describe('calculateNumber', () => {
  it('sums whole numbers without rounding', () => {
    assert.strictEqual(calculateNumber(1.0, 2.0), 3);
  });

  it('sums with second number rounded down', () => {
    assert.strictEqual(calculateNumber(1.0, 2.4), 3);
  });

  it('rounds both numbers down before summing', () => {
    assert.strictEqual(calculateNumber(1.4, 2.4), 3);
  });

  it('rounds first number down before summing', () => {
    assert.strictEqual(calculateNumber(1.4, 2.0), 3);
  });

  it('sums with second number rounded up', () => {
    assert.strictEqual(calculateNumber(1.0, 2.5), 4);
  });

  it('rounds both numbers up before summing', () => {
    assert.strictEqual(calculateNumber(2.6, 2.5), 6);
  });

  it('rounds first number up before summing', () => {
    assert.strictEqual(calculateNumber(2.6, 2.0), 5);
  });

  it('handles rounding near half with trailing 9s', () => {
    assert.strictEqual(calculateNumber(2.499999, 3.499999), 5);
  });
});
