/* eslint-disable linebreak-style */
/* eslint-disable no-undef */
/* eslint-disable import/no-extraneous-dependencies */
// *************************PAIRED WITH EDWIN RUGOOGAMU*********************
const { assert } = require('chai');
const factorial = require('../factorial');

describe('Factorial test', () => {
  it('should return 1 for factorial of 0', () => {
    assert.equal(factorial(0), 1);
  });

  it('should return 1 for factorial of 1', () => {
    assert.equal(factorial(1), 1);
  });

  it('check factorial of 2', () => {
    assert.equal(factorial(2), 2);
  });
  it('should return the correct factorial of 3', () => {
    assert.equal(factorial(3), 6);
  });
  it('should return the correct factorial of 4', () => {
    assert.equal(factorial(4), 24);
  });
  it('should return the correct factorial of 5', () => {
    assert.equal(factorial(5), 120);
  });
  it('should return an error message', () => {
    assert.throw(() => factorial(2.67), 'Factorial is only defined for positive integers');
  });
  it('should return an error message', () => {
    assert.throw(() => factorial(-1), 'Factorial is only defined for positive integers');
  });
});
