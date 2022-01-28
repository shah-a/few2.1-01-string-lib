const capFirst = require('./challenges/challenge-01');
const { capWords, capHeadline } = require('./challenges/challenge-02');
const allCaps = require('./challenges/challenge-03');

module.exports = {
  capFirst,
  capWords,
  capHeadline,
  allCaps,
};

// const str = 'the quick brown fox jumped over the lazy dog';
// const funcs = [
//   capFirst,
//   capWords,
//   capHeadline,
//   allCaps,
// ];

// funcs.forEach((func, i) => {
//   console.log(`${i + 1}: ${func(str)}`);
// });
