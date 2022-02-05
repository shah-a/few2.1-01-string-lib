const isEmpty = (s) => /^(\s+|)$/g.test(s);
// const isEmpty = (s) => s.trim() === ''; // Alternate solution

module.exports = isEmpty;
