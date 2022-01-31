const s = require('../src/index');

describe('CHALLENGE 1 TESTS', () => {
  test('capFirst', () => {
    expect(s.capFirst('salaam')).toBe('Salaam');
  });

  test('lowerFirst', () => {
    expect(s.lowerFirst('Salaam')).toBe('salaam');
  });
});

describe('CHALLENGE 2 TESTS', () => {
  test('capWords', () => {
    expect(s.capWords('salaam world')).toBe('Salaam World');
  });

  test('capTitle', () => {
    expect(s.capTitle('the most foo in bar')).toBe('The Most Foo in Bar');
  });
});

describe('CHALLENGE 3 TESTS', () => {
  test('allCaps', () => {
    expect(s.allCaps('salaam world')).toBe('SALAAM WORLD');
  });
});

describe('CHALLENGE 4 TESTS', () => {
  test('removeExtraSpaces', () => {
    expect(s.removeExtraSpaces('   Salaam   world!   ')).toBe('Salaam world!');
  });
});

describe('CHALLENGE 5 TESTS', () => {
  test('kebobCase', () => {
    expect(s.kebobCase(' Kebob Case! ')).toBe('kebob-case!');
  });

  test('kebobCaseNoSpecial', () => {
    expect(s.kebobCaseNoSpecial(' Kebob Case! ')).toBe('kebob-case');
  });
});

describe('CHALLENGE 6 TESTS', () => {
  test('snakeCase', () => {
    expect(s.snakeCase(' Snake Case! ')).toBe('snake_case!');
  });

  test('snakeCaseNoSpecial', () => {
    expect(s.snakeCaseNoSpecial(' Snake Case! ')).toBe('snake_case');
  });

  test('customSeparator', () => {
    expect(s.customSeparator(' Custom Case! ', '🐒')).toBe('custom🐒case!');
    expect(s.customSeparator(' Custom Case! ')).toBe('custom case!');
  });

  test('customSeparatorNoSpecial', () => {
    expect(s.customSeparatorNoSpecial(' Custom Case! ', '🐒')).toBe('custom🐒case');
    expect(s.customSeparatorNoSpecial(' Custom Case! ')).toBe('custom case');
  });
});

describe('CHALLENGE 7 TESTS', () => {
  test('camelCase', () => {
    expect(s.camelCase('Camel Case!')).toBe('camelCase!');
  });

  test('camelCaseNoSpecial', () => {
    expect(s.camelCaseNoSpecial('Camel Case!')).toBe('camelCase');
  });
});

describe('CHALLENGE 8 TESTS', () => {
  test('shift', () => {
    expect(s.shift('Shift me right by 3', 3)).toBe('y 3Shift me right b');
    expect(s.shift('Shift me left by 3', -3)).toBe('ft me left by 3Shi');
    expect(s.shift('Shift me right by 1')).toBe('1Shift me right by ');
  });
});

describe('CHALLENGE 9 TESTS', () => {
  test('makeHashtag', () => {
    expect(s.makeHashtag('Salaam world')).toEqual(['#Salaam', '#World']);
    expect(s.makeHashtag('Amazing bongo drums for sale')).toEqual(['#Amazing', '#Bongo', '#Drums']);
  });
});

describe('CHALLENGE 10 TESTS', () => {
  test('isEmpty', () => {
    expect(s.isEmpty('Abc def')).toBe(false);
    expect(s.isEmpty('  \n  \n\r\t')).toBe(true);
    expect(s.isEmpty(`

			`)).toBe(true); // eslint-disable-line no-tabs
  });
});
