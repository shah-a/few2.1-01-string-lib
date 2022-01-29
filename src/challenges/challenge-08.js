/*
 * Moves the first letter of a string to the end
 * of the string.
 *
 * E.g: 'Salaam World' => 'alaam WorldS'
 */

const shiftRight = (s) => s.charAt(s.length - 1) + s.slice(0, s.length - 1);
const shiftLeft = (s) => s.slice(1) + s.charAt(0);

const shift = (s, step = 1) => {
  const rotationSteps = parseInt(step, 10);
  const rotateFn = rotationSteps > 0 ? shiftRight : shiftLeft;
  let shiftedString = s;
  for (let i = 0; i < Math.abs(rotationSteps); i += 1) {
    shiftedString = rotateFn(shiftedString);
  }
  return shiftedString;
};

module.exports = shift;
