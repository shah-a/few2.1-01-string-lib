/*
 * removeExtraSpaces:
 * Removes all spaces from the beginning and end
 * of a string along with any extra spaces in the
 * middle.
 *
 * If more than one space appears in the
 * middle of a string, it is replaced by a single
 * space.
 *
 * E.g: '   Salaam   world!   ' -> 'Salaam world!'
 */

const removeExtraSpaces = (s) => s.trim().replace(/\s+/g, ' ');

module.exports = removeExtraSpaces;
