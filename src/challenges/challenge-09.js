const { capWords } = require('./challenge-02');
const removeExtraSpaces = require('./challenge-04');

const makeHashtag = (s) => {
  const trimmedString = removeExtraSpaces(s);
  const cappedWords = capWords(trimmedString);
  const hashtaggedWords = cappedWords.split(' ').map((word) => `#${word}`);
  hashtaggedWords.sort((a, b) => b.length - a.length);
  return hashtaggedWords.slice(0, 3);
};

module.exports = makeHashtag;
