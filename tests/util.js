/* SANDBOX FOR CHECKING FUNCTIONS */
/* eslint-disable no-console, no-unused-vars */

const fs = require('fs');
const s = require('../src');

function logOutputs(funcs, testInputs) {
  funcs.forEach((func, i) => {
    console.log(`${i + 1}: ${s[func].name}`);

    testInputs.forEach((testInput) => {
      if (s[func].name.includes('Separator')) {
        console.log(s[func](testInput, '🤔'));
        return;
      }

      console.log(s[func](testInput));
    });
  });
}

function writeTestCasesJson(funcs, testInputs) {
  const testCasesJson = testInputs.map((testInput) => ({
    input: testInput,
    expected: funcs.reduce((acc, func) => {
      if (s[func].name.includes('Separator')) {
        acc[func] = s[func](testInput, '🤔');
        return acc;
      }

      acc[func] = s[func](testInput);
      return acc;
    }, {}),
  }));

  fs.writeFileSync('./tests/testCases.json', JSON.stringify(testCasesJson, null, 2));
}

const funcs = Object.keys(s);
const testInputs = [
  'THE QUICK BROWN FOX JUMPS OVER THE LAZY DOG!',
  'the quick brown fox jumps over the lazy dog!',
  '   padded   with   spaces!   ',
  'nospaces',
  '',
  'string, with. a: bunc\'h; "of" punctuation!',
  ', . ! @ # $ % ^ & * ( ) _ + - = { } [ ] | : \' " < > ? / \\',
  '!,@,#,$,%,^,&,*,(,),_,+,-,=,{,},[,],|,:,\',",<,>,?,/,\\',
  '        \n        \n\t\t\t  ',
];

logOutputs(funcs, testInputs);
// writeTestCasesJson(funcs, testInputs);

console.log('\n-------------------------------------\n');

console.log(s.makeHashtag('Amazing bongo drums for sale'));
console.log(s.shift('Shift me right by 3', 3));
console.log(s.shift('Shift me left by 3', -3));
