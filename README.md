# FEW 2.1 Assignment 1: String Library

![npm (scoped)](https://img.shields.io/npm/v/@shah-a/string-lib?style=for-the-badge)
![npm](https://img.shields.io/npm/dt/@shah-a/string-lib?style=for-the-badge)

## Description

A library for string manipulation.

## Installation

Local installation to any node project:

```
$ npm install @shah-a/string-lib
```

## Usage

Require the package in your script and call any of the available functions.

**Examples:**

```javascript
const s = require('@shah-a/string-lib');

console.log(s.makeHashtag('Amazing bongo drums for sale'))
// Output: ['#Amazing', '#Bongo', '#Drums']

console.log(s.shift('Shift me right by 3', 3))
// Output: 'y 3Shift me right b'

console.log(s.shift('Shift me left by 3', -3))
// Output: 'ft me left by 3Shi'
```

That's it! 😃

## API

Reference list of available functions (sorted by the challenge of the assignment they appeared):

### Challenge 1

#### `capFirst`

Uppercases the first character in a string.

```javascript
s.capFirst('salaam');
// returns 'Salaam'
```

#### `lowerFirst`

Lowercases the first character in a string.

```javascript
s.lowerFirst('Salaam');
// returns 'salaam'
```

### Challenge 2

#### `capWords`

Uppercases the first letter of each word in a string.

```javascript
s.capWords('salaam world');
// returns 'Salaam World'
```

#### `capTitle`

Uppercases the first letter of each word in a string except for the following words:

> `'the', 'in', 'a', 'an', 'and', 'but', 'for', 'at', 'by', 'from'`

The first word is always uppercased, even if it's on the exception list.

```javascript
s.capTitle('the most foo in bar');
// returns 'The Most foo in Bar'
```

### Challenge 3

#### `allCaps`

Uppercases all characters in a string.

Note: This function is an alias for the built-in `String.prototype.toUpperCase` function.

```javascript
s.allCaps('salaam world');
// returns 'SALAAM WORLD'
```

### Challenge 4

#### `removeExtraSpaces`

Removes all spaces from the beginning and end of a string along with any extra spaces in the middle.

If more than one space appears in the middle of a string, it is replaced by a single space.

```javascript
s.removeExtraSpaces('   Salaam   world!   ');
// returns 'Salaam world!'
```

### Challenge 5

#### `kebobCase`

Removes extra spaces and replaces spaces with a hyphen "-". Also makes all characters lowercase.

```javascript
s.kebobCase(' Kebob Case! ');
// returns 'kebob-case!'
```

#### `kebobCaseNoSpecial`

Removes extra spaces and replaces spaces with a hyphen "-". Also makes all characters lowercase and removes special characters.

```javascript
s.kebobCaseNoSpecial(' Kebob Case! ');
// returns 'kebob-case'
```

### Challenge 6

#### `snakeCase`

Removes extra spaces and replaces spaces with an underscore "_". Also makes all characters lowercase.

```javascript
s.snakeCase(' Snake Case! ');
// returns 'snake_case!'
```

#### `snakeCaseNoSpecial`

Removes extra spaces and replaces spaces with an underscore "_". Also makes all characters lowercase and removes special characters.

```javascript
s.snakeCaseNoSpecial(' Snake Case! ');
// returns 'snake_case'
```

#### `customSeparator`

Removes extra spaces and replaces spaces with a custom separator. Also makes all characters lowercase.

```javascript
s.customSeparator(' Custom Case! ', '🐒');
// returns 'custom🐒case!'
```

#### `customSeparatorNoSpecial`

Removes extra spaces and replaces spaces with a custom separator. Also makes all characters lowercase and removes special characters.

```javascript
s.customSeparatorNoSpecial(' Custom Case! ', '🐒')
// returns 'custom🐒case'
```

### Challenge 7

#### `camelCase`

Lowercases the first character of the first word. Then uppercases the first character of all other words. Also removes all spaces.

```javascript
s.camelCase('Camel Case!')
// returns 'camelCase!'
```

#### `camelCaseNoSpecial`

Lowercases the first character of the first word. Then uppercases the first character of all other words. Also removes all spaces and removes special characters.

```javascript
s.camelCaseNoSpecial('Camel Case!')
// returns 'camelCase'
```

### Challenge 8

#### `shift`

Shifts the characters of a string to the right or left. If the `step` parameter is positive, characters will be shifted to the right. If the `step` parameter is negative, the characters will be shifted to the left.

```javascript
s.shift('Shift me right by 3', 3)
// returns 'y 3Shift me right b'
```

```javascript
s.shift('Shift me left by 3', -3)
// returns 'ft me left by 3Shi'
```

### Challenge 9

#### `makeHashtag`

Converts a string to a list of hashtags. A hashtag begins with '#' and has no spaces. Also uppercases the hashtagged words.

If the string has more than three words, picks the three longest and returns hashtags from those.

```javascript
s.makeHashtag('Salaam world')
// returns ['#Salaam', '#World']
```

```javascript
s.makeHashtag('Amazing bongo drums for sale')
// returns ['#Amazing', '#Bongo', '#Drums']
```

### Challenge 10

#### `isEmpty`

Returns true if a string is empty or contains only whitespace. Whitespace includes: spaces, line returns, and tabs. These characters can be represented with: '\n' (new line), '\r' (carriage return), and '\t' (tab).

```javascript
s.isEmpty('Abc def')
// returns false
```

```javascript
s.isEmpty('  \n  \n\r\t')
// returns true
```

```javascript
s.isEmpty(`

			`)
// returns true
```
