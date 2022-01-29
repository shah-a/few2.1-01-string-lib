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
