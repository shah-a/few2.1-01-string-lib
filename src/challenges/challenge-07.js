const { lowerFirst } = require('./challenge-01');
const { capWords } = require('./challenge-02');
const removeExtraSpaces = require('./challenge-04');

const camelCase = (s) => {
  const trimmedString = removeExtraSpaces(s);
  const words = trimmedString.split(' ');
  const firstWord = lowerFirst(words[0]);
  const restOfWords = words.slice(1).map(capWords);
  return [firstWord, ...restOfWords].join('');
};

const camelCaseNoSpecial = (s) => camelCase(s).replace(/[^0-9A-Za-z]+/g, '');

module.exports = { camelCase, camelCaseNoSpecial };
