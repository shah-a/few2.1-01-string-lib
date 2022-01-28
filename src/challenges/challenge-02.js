/*
 * Uppercases the first letter of each word in a
 * string.
 *
 * E.g: 'salaam world' => 'Salaam World'
 */

const capFirst = require('./challenge-01');

const lower = ['the', 'in', 'a', 'an', 'and', 'but', 'for', 'at', 'by', 'from'];

const capWords = (s) => s.split(' ').map(capFirst).join(' ');
const capHeadline = (s) => s.split(' ').map((word, index) => {
  if (index === 0) {
    return capFirst(word);
  }
  if (lower.includes(word.toLowerCase())) {
    return word;
  }
  return capFirst(word);
}).join(' ');

module.exports = { capWords, capHeadline };
