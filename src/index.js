const { capFirst, lowerFirst } = require('./challenges/challenge-01');
const { capWords, capTitle } = require('./challenges/challenge-02');
const allCaps = require('./challenges/challenge-03');
const removeExtraSpaces = require('./challenges/challenge-04');
const { kebobCase, kebobCaseNoSpecial } = require('./challenges/challenge-05');
const {
  snakeCase, snakeCaseNoSpecial, customSeparator, customSeparatorNoSpecial,
} = require('./challenges/challenge-06');
const { camelCase, camelCaseNoSpecial } = require('./challenges/challenge-07');
const shift = require('./challenges/challenge-08');
const makeHashtag = require('./challenges/challenge-09');
const isEmpty = require('./challenges/challenge-10');

module.exports = {
  capFirst,
  lowerFirst,
  capWords,
  capTitle,
  allCaps,
  removeExtraSpaces,
  kebobCase,
  kebobCaseNoSpecial,
  snakeCase,
  snakeCaseNoSpecial,
  customSeparator,
  customSeparatorNoSpecial,
  camelCase,
  camelCaseNoSpecial,
  shift,
  makeHashtag,
  isEmpty,
};
