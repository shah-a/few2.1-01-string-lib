/* eslint-disable */
// Script for testing initial functionality

const s = require('../src');

const str1 = 'the quick brown fox jumps over the lazy dog';
const str2 = '   Salaam   world!   ';
const str3 = `

			`;

const funcs = [
  s.capFirst,
  s.lowerFirst,
  s.capWords,
  s.capTitle,
  s.allCaps,
  s.removeExtraSpaces,
  s.kebobCase,
  s.kebobCaseNoSpecial,
  s.snakeCase,
  s.snakeCaseNoSpecial,
  s.customSeparator,
  s.customSeparatorNoSpecial,
  s.camelCase,
  s.camelCaseNoSpecial,
  s.shift,
  s.makeHashtag,
  s.isEmpty,
];

// funcs.forEach((func, i) => {
//   if (i === 10 || i === 11) {
//     console.log(`${i + 1}: ${func(str1, '🤔')}, ${func(str2, '🤔')} (${func.name})`);
//     return;
//   }
//   console.log(`${i + 1}: ${func(str1)}, ${func(str2)} (${func.name})`);
// });

console.log(s.makeHashtag('Amazing bongo drums for sale'));
// Output: ['#Amazing', '#Bongo', '#Drums']

console.log(s.shift('Shift me right by 3', 3))
// Output: y 3Shift me right b

console.log(s.shift('Shift me left by 3', -3))
// Output: 'ft me left by 3Shi'
