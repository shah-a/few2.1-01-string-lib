const s = require('../src/index');
const testCases = require('./testCases.json');

function checkCases(funcName, separator) {
  testCases.forEach((testCase) => {
    if (funcName.includes('Separator')) {
      expect(s[funcName](testCase.input, separator)).toBe(testCase.expected[funcName]);
      return;
    }
    if (funcName === 'makeHashtag') {
      expect(s[funcName](testCase.input)).toEqual(testCase.expected[funcName]);
      return;
    }
    expect(s[funcName](testCase.input)).toBe(testCase.expected[funcName]);
  });
}

describe('CHALLENGE 1 TESTS', () => {
  test('capFirst', () => {
    expect(s.capFirst('salaam')).toBe('Salaam');
    checkCases('capFirst');
  });

  test('lowerFirst', () => {
    expect(s.lowerFirst('Salaam')).toBe('salaam');
    checkCases('lowerFirst');
  });
});

describe('CHALLENGE 2 TESTS', () => {
  test('capWords', () => {
    expect(s.capWords('salaam world')).toBe('Salaam World');
    checkCases('capWords');
  });

  test('capTitle', () => {
    expect(s.capTitle('the most foo in bar')).toBe('The Most Foo in Bar');
    checkCases('capTitle');
  });
});

describe('CHALLENGE 3 TESTS', () => {
  test('allCaps', () => {
    expect(s.allCaps('salaam world')).toBe('SALAAM WORLD');
    checkCases('allCaps');
  });
});

describe('CHALLENGE 4 TESTS', () => {
  test('removeExtraSpaces', () => {
    expect(s.removeExtraSpaces('   Salaam   world!   ')).toBe('Salaam world!');
    checkCases('removeExtraSpaces');
  });
});

describe('CHALLENGE 5 TESTS', () => {
  test('kebobCase', () => {
    expect(s.kebobCase(' Kebob Case! ')).toBe('kebob-case!');
    checkCases('kebobCase');
  });

  test('kebobCaseNoSpecial', () => {
    expect(s.kebobCaseNoSpecial(' Kebob Case! ')).toBe('kebob-case');
    checkCases('kebobCaseNoSpecial');
  });
});

describe('CHALLENGE 6 TESTS', () => {
  test('snakeCase', () => {
    expect(s.snakeCase(' Snake Case! ')).toBe('snake_case!');
    checkCases('snakeCase');
  });

  test('snakeCaseNoSpecial', () => {
    expect(s.snakeCaseNoSpecial(' Snake Case! ')).toBe('snake_case');
    checkCases('snakeCaseNoSpecial');
  });

  test('customSeparator', () => {
    expect(s.customSeparator(' Custom Case! ', '🐒')).toBe('custom🐒case!');
    expect(s.customSeparator(' Custom Case! ')).toBe('custom case!');
    checkCases('customSeparator', '🤔');
  });

  test('customSeparatorNoSpecial', () => {
    expect(s.customSeparatorNoSpecial(' Custom Case! ', '🐒')).toBe('custom🐒case');
    expect(s.customSeparatorNoSpecial(' Custom Case! ')).toBe('custom case');
    checkCases('customSeparatorNoSpecial', '🤔');
  });
});

describe('CHALLENGE 7 TESTS', () => {
  test('camelCase', () => {
    expect(s.camelCase('Camel Case!')).toBe('camelCase!');
    checkCases('camelCase');
  });

  test('camelCaseNoSpecial', () => {
    expect(s.camelCaseNoSpecial('Camel Case!')).toBe('camelCase');
    checkCases('camelCaseNoSpecial');
  });
});

describe('CHALLENGE 8 TESTS', () => {
  test('shift', () => {
    expect(s.shift('Shift me right by 3', 3)).toBe('y 3Shift me right b');
    expect(s.shift('Shift me left by 3', -3)).toBe('ft me left by 3Shi');
    expect(s.shift('Shift me right by 1')).toBe('1Shift me right by ');
    checkCases('shift');
  });
});

describe('CHALLENGE 9 TESTS', () => {
  test('makeHashtag', () => {
    expect(s.makeHashtag('Salaam world')).toEqual(['#Salaam', '#World']);
    expect(s.makeHashtag('Amazing bongo drums for sale')).toEqual(['#Amazing', '#Bongo', '#Drums']);
    checkCases('makeHashtag');
  });
});

describe('CHALLENGE 10 TESTS', () => {
  test('isEmpty', () => {
    expect(s.isEmpty('Abc def')).toBe(false);
    expect(s.isEmpty('  \n  \n\r\t')).toBe(true);
    /* eslint-disable no-tabs */
    expect(s.isEmpty(`

			`)).toBe(true);
    /* eslint-enable no-tabs */
    checkCases('isEmpty');
  });
});
