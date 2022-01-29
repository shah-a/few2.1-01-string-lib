/*
 * Converts a string to a list of hashtags. A
 * hashtag begins with '#' and has no spaces.
 * Also uppercases the hashtagged words.
 *
 * If the string has more than three words, pick
 * the three longest and make the hashtag from
 * those.
 *
 * E.g:
 * Input: 'Amazing bongo drums for sale'
 * Output: ['#Amazing', '#Bongo', '#Drums']
 */

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
