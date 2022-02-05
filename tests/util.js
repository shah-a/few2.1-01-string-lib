/* SANDBOX FOR CHECKING FUNCTIONS */

/*
 * WARNING:
 * This file contains a function that can be
 * used to generate test cases and output them to
 * a json file. The json file can be imported into
 * the test suite and used to test the functions.
 *
 * Obviously, these test cases would technically
 * never fail (since they were generated by the
 * functions in the library in the first place).
 *
 * The purpose of the function is just to make it
 * easier to write the test cases (rather than
 * write them all by hand). In actual practice,
 * test cases should ideally be written by hand
 * to ensure they turn out as intended.
 */

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

/* UNCOMMENT WITH CAUTION; READ THE NOTE AT THE TOP OF THIS FILE */
// writeTestCasesJson(funcs, testInputs);
/* UNCOMMENT WITH CAUTION; READ THE NOTE AT THE TOP OF THIS FILE */

console.log('\n-------------------------------------\n');

console.log(s.makeHashtag('Amazing bongo drums for sale'));
console.log(s.shift('Shift me right by 3', 3));
console.log(s.shift('Shift me left by 3', -3));
