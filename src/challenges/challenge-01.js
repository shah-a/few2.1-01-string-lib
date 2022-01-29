/*
 * capFirst:
 * Uppercases the first character in a string.
 *
 * E.g: 'salaam' => 'Salaam'
 *
 * lowerFirst:
 * Lowercases the first character in a string.
 *
 * E.g: 'Salaam' => 'salaam'
 */

const capFirst = (s) => s[0].toUpperCase() + s.slice(1);
const lowerFirst = (s) => s[0].toLowerCase() + s.slice(1);

module.exports = { capFirst, lowerFirst };
