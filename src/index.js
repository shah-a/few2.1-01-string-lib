const capFirst = require('./challenges/challenge-01');
const { capWords, capTitle } = require('./challenges/challenge-02');
const allCaps = require('./challenges/challenge-03');
const removeExtraSpaces = require('./challenges/challenge-04');
const { kebobCase, kebobCaseNoSpecial } = require('./challenges/challenge-05');
const {
  snakeCase, snakeCaseNoSpecial, customSeparator, customSeparatorNoSpecial,
} = require('./challenges/challenge-06');

module.exports = {
  capFirst,
  capWords,
  capTitle,
  allCaps,
  removeExtraSpaces,
  kebobCase,
  kebobCaseNoSpecial,
  snakeCase,
  snakeCaseNoSpecial,
  customSeparator,
  customSeparatorNoSpecial,
};

// const str1 = 'the quick brown fox jumped over the lazy dog';
// const str2 = '   Salaam   world!   ';

// const funcs = [
//   capFirst,
//   capWords,
//   capTitle,
//   allCaps,
//   removeExtraSpaces,
//   kebobCase,
//   kebobCaseNoSpecial,
//   snakeCase,
//   snakeCaseNoSpecial,
//   customSeparator,
//   customSeparatorNoSpecial,
// ];

// funcs.forEach((func, i) => {
//   if (i === 9 || i === 10) {
//     console.log(`${i + 1}: ${func(str1, '🤔')}, ${func(str2, '🤔')} (${func.name})`);
//     return;
//   }
//   console.log(`${i + 1}: ${func(str1)}, ${func(str2)} (${func.name})`);
// });
