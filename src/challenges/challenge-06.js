/*
 * snakeCase:
 * Removes extra spaces and replaces spaces with
 * an underscore "_". Also makes all characters
 * lowercase.
 *
 * E.g: ' Snake Case! ' -> 'snake_case!'
 *
 * snakeCaseNoSpecial:
 * Removes extra spaces and replaces spaces with
 * an underscore "_". Also makes all characters
 * lowercase and removes special characters.
 *
 * E.g: ' Snake Case! ' -> 'snake_case'
 *
 * customSeparator:
 * Removes extra spaces and replaces spaces with
 * a custom separator. Also makes all characters
 * lowercase.
 *
 * E.g:
 * Input: ' Custom Case! ', '🐒'
 * Output: 'custom🐒case!'
 *
 * customSeparatorNoSpecial:
 * Removes extra spaces and replaces spaces with
 * a custom separator. Also makes all characters
 * lowercase and removes special characters.
 *
 * E.g:
 * Input: ' Custom Case! ', '🐒'
 * Output: 'custom🐒case'
 */

const snakeCase = (s) => s.trim().toLowerCase().replace(/\s+/g, '_');
const snakeCaseNoSpecial = (s) => snakeCase(s).replace(/[^0-9a-z\s_]+/g, '');

const customSeparator = (s, separator = ' ') => s.trim().toLowerCase().replace(/\s+/g, separator);
const customSeparatorNoSpecial = (s, separator = ' ') => {
  const re = new RegExp(`[^0-9a-z\\s${separator}]+`, 'gu');
  return customSeparator(s, separator).replace(re, '');
};

module.exports = {
  snakeCase,
  snakeCaseNoSpecial,
  customSeparator,
  customSeparatorNoSpecial,
};
