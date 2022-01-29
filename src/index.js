const { capFirst, lowerFirst } = require('./challenges/challenge-01');
const { capWords, capTitle } = require('./challenges/challenge-02');
const allCaps = require('./challenges/challenge-03');
const removeExtraSpaces = require('./challenges/challenge-04');
const { kebobCase, kebobCaseNoSpecial } = require('./challenges/challenge-05');
const {
  snakeCase, snakeCaseNoSpecial, customSeparator, customSeparatorNoSpecial,
} = require('./challenges/challenge-06');
const { camelCase, camelCaseNoSpecial } = require('./challenges/challenge-07');

module.exports = {
  capFirst,
  lowerFirst,
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
  camelCase,
  camelCaseNoSpecial,
};

// const str1 = 'the quick brown fox jumped over the lazy dog';
// const str2 = '   Salaam   world!   ';

// const funcs = [
//   capFirst,
//   lowerFirst,
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
//   camelCase,
//   camelCaseNoSpecial,
// ];

// funcs.forEach((func, i) => {
//   if (i === 10 || i === 11) {
//     console.log(`${i + 1}: ${func(str1, '🤔')}, ${func(str2, '🤔')} (${func.name})`);
//     return;
//   }
//   console.log(`${i + 1}: ${func(str1)}, ${func(str2)} (${func.name})`);
// });
