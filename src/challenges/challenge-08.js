/*
 * shift:
 * Shifts the characters of a string to the
 * right or left. If the `step` parameter is
 * positive, characters will be shifted to the
 * right. If the `step` parameter is negative,
 * the characters will be shifted to the left.
 *
 * E.g. 1 (shift right):
 * Input: 'Shift me right by 3', 3
 * Output: 'y 3Shift me right b'
 *
 * E.g. 2 (shift left):
 * Input: 'Shift me left by 3', -3
 * Output: 'ft me left by 3Shi'
 */

const shiftRight = (s) => s.charAt(s.length - 1) + s.slice(0, s.length - 1);
const shiftLeft = (s) => s.slice(1) + s.charAt(0);

const shift = (s, step = 1) => {
  const shiftSteps = parseInt(step, 10);
  const rotateFn = shiftSteps > 0 ? shiftRight : shiftLeft;
  let shiftedString = s;
  for (let i = 0; i < Math.abs(shiftSteps); i += 1) {
    shiftedString = rotateFn(shiftedString);
  }
  return shiftedString;
};

module.exports = shift;
