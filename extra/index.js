/* SANDBOX FOR CHECKING FUNCTIONS */
/* eslint-disable no-tabs, no-console */

const s = require('../src');

const testInputs = [
  'THE QUICK BROWN FOX JUMPS OVER THE LAZY DOG!',
  'the quick brown fox jumps over the lazy dog!',
  '   padded   with   spaces!   ',
  `

			`,
];

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

funcs.forEach((func, i) => {
  console.log(`${i + 1}: ${func.name}`);
  testInputs.forEach((testInput) => {
    if (i === 10 || i === 11) {
      console.log(func(testInput, '🤔'));
      return;
    }
    console.log(func(testInput));
  });
});

console.log('\n-------------------------------------\n');

console.log(s.makeHashtag('Amazing bongo drums for sale'));
console.log(s.shift('Shift me right by 3', 3));
console.log(s.shift('Shift me left by 3', -3));
