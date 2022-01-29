const kebobCase = (s) => s.trim().toLowerCase().replace(/\s+/g, '-');
const kebobCaseNoSpecial = (s) => kebobCase(s).replace(/[^0-9a-z\s-]+/g, '');

module.exports = { kebobCase, kebobCaseNoSpecial };
