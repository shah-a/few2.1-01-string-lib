/* SANDBOX FOR CHECKING FUNCTIONS */
/* eslint-disable no-tabs, no-console */

const s = require('../src');

const funcs = Object.keys(s);
const testInputs = [
  'THE QUICK BROWN FOX JUMPS OVER THE LAZY DOG!',
  'the quick brown fox jumps over the lazy dog!',
  '   padded   with   spaces!   ',
  '',
  'string, with. a: bunc\'h; "of" punctuation!',
  ', . ! @ # $ % ^ & * ( ) _ + - = { } [ ] | : \' " < > ? / \\',
  '!,@,#,$,%,^,&,*,(,),_,+,-,=,{,},[,],|,:,\',",<,>,?,/,\\',
  '        \n        \n\t\t\t  ',
];

funcs.forEach((func, i) => {
  console.log(`${i + 1}: ${s[func].name}`);

  testInputs.forEach((testInput) => {
    if (s[func].name.includes('Separator')) {
      const output = s[func](testInput, '🤔');
      console.log(JSON.stringify(output));
      return;
    }

    const output = JSON.stringify(s[func](testInput));
    console.log(JSON.stringify(output));
  });
});

console.log('\n-------------------------------------\n');

console.log(s.makeHashtag('Amazing bongo drums for sale'));
console.log(s.shift('Shift me right by 3', 3));
console.log(s.shift('Shift me left by 3', -3));
