/*
 * Uppercases the first character in a string.
 *
 * E.g: 'salaam' => 'Salaam'
 */

const capFirst = (s) => s[0].toUpperCase() + s.slice(1);

module.exports = capFirst;
