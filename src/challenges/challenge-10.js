/*
 * Returns true if a string is empty or contains
 * only whitespace. Whitespace includes: spaces,
 * line returns, and tabs. These characters can be
 * represented with: '\n' (new line), '\r' (carriage
 * return), and '\t' (tab).
 *
 * E.g: 'Abc def' => false
 */

const isEmpty = (s) => /^\s+$/g.test(s);
// const isEmpty = (s) => s.trim() === ''; // Alternate solution

module.exports = isEmpty;
