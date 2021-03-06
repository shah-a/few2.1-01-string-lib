const { capFirst } = require('./challenge-01');

const keepLower = ['the', 'in', 'a', 'an', 'and', 'but', 'for', 'at', 'by', 'from'];

const capWords = (s) => s.split(' ').map((word) => (word ? capFirst(word) : '')).join(' ');
const capTitle = (s) => s.split(' ').map((word, index) => {
  if (!word) return '';
  if (index === 0) {
    return capFirst(word);
  }
  if (keepLower.includes(word.toLowerCase())) {
    return word;
  }
  return capFirst(word);
}).join(' ');

module.exports = { capWords, capTitle };
