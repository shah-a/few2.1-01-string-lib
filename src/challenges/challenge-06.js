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
