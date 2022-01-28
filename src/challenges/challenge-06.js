/*
 * Removes extra space and replaces spaces with an
 * underscore "_". Also makes all characters
 * lowercase.
 *
 * E.g: ' Snake Case ' -> 'snake_case'
 */

const snakeCase = (s) => s.trim().toLowerCase().replace(/\s+/g, '_');
const snakeCaseNoSpecial = (s) => s.trim().toLowerCase().replace(/[^0-9a-z\s_]+/g, '').replace(/\s+/g, '_');

const customSeparator = (s, separator = '*') => s.trim().toLowerCase().replace(/\s+/g, separator);
const customSeparatorNoSpecial = (s, separator = '*') => {
  const re = new RegExp(`[^0-9a-z\\s${separator}]+`, 'gu');
  return s.trim().toLowerCase().replace(re, '').replace(/\s+/g, separator);
};

module.exports = {
  snakeCase,
  snakeCaseNoSpecial,
  customSeparator,
  customSeparatorNoSpecial,
};
