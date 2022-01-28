const capFirst = require('./challenges/challenge-01');
const { capWords, capHeadline } = require('./challenges/challenge-02');
const allCaps = require('./challenges/challenge-03');
const removeExtraSpaces = require('./challenges/challenge-04');

module.exports = {
  capFirst,
  capWords,
  capHeadline,
  allCaps,
  removeExtraSpaces,
};

// const str2 = '   Salaam   world!   ';
// const str1 = 'the quick brown fox jumped over the lazy dog';

// const funcs = [
//   capFirst,
//   capWords,
//   capHeadline,
//   allCaps,
//   removeExtraSpaces,
// ];

// funcs.forEach((func, i) => {
//   console.log(`${i + 1}: ${func(str1)}, ${func(str2)}`);
// });
