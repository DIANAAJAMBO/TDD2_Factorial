/* eslint-disable linebreak-style */

//
function factorial(a) {
  if (!Number.isInteger(a) || a < 0) {
    throw new Error('Factorial is only defined for positive integers');
  } if (a === 0 || a === 1) {
    return 1;
  }
  return a * factorial(a - 1);
}

module.exports = factorial;
