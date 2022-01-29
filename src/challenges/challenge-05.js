/*
 * kebobCase:
 * Removes extra spaces and replaces spaces with
 * a hyphen "-". Also makes all characters
 * lowercase.
 *
 * E.g: ' Kebob Case! ' -> 'kebob-case!'
 *
 * kebobCaseNoSpecial:
 * Removes extra spaces and replaces spaces with
 * a hyphen "-". Also makes all characters
 * lowercase and removes special characters.
 *
 * E.g: ' Kebob Case! ' -> 'kebob-case'
 */

const kebobCase = (s) => s.trim().toLowerCase().replace(/\s+/g, '-');
const kebobCaseNoSpecial = (s) => kebobCase(s).replace(/[^0-9a-z\s-]+/g, '');

module.exports = { kebobCase, kebobCaseNoSpecial };
