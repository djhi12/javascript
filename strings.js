// Declare some strings
const str1 = 'Hello,';
const str2 = ' World!';
const fullName = 'John Doe';
const sentence = 'The quick brown fox jumps over the lazy dog';
const searchWord = 'quick';

// String Concatenation
const greeting = str1 + str2;
console.log(greeting); // Output: 'Hello, World!'

// String Length
const nameLength = fullName.length;
console.log(`Name length: ${nameLength}`); // Output: 'Name length: 8'

// Accessing Characters
const firstChar = sentence[0];
console.log(`First character: ${firstChar}`); // Output: 'First character: T'

// Substrings
const sub = sentence.substring(4, 9);
console.log(`Substring: ${sub}`); // Output: 'Substring: quick'

// Searching and Replacing
const indexOfWord = sentence.indexOf(searchWord);
console.log(`Index of '${searchWord}': ${indexOfWord}`); // Output: 'Index of 'quick': 4'
const replacedSentence = sentence.replace(searchWord, 'fast');
console.log(`Replaced sentence: ${replacedSentence}`); // Output: 'Replaced sentence: The fast brown fox jumps over the lazy dog'

// Changing Case
const upperCaseName = fullName.toUpperCase();
console.log(`Uppercase Name: ${upperCaseName}`); // Output: 'Uppercase Name: JOHN DOE'

// Trim Whitespace
const textWithWhitespace = '   Trim me!   ';
const trimmedText = textWithWhitespace.trim();
console.log(`Trimmed Text: '${trimmedText}'`); // Output: 'Trimmed Text: 'Trim me!''

// String Interpolation
const age = 30;
const interpolatedText = `My name is ${fullName}, and I am ${age} years old.`;
console.log(interpolatedText); // Output: 'My name is John Doe, and I am 30 years old.'

// String Comparison
const string1 = 'apple';
const string2 = 'banana';
const comparisonResult = string1 < string2;
console.log(`String Comparison Result: ${comparisonResult}`); // Output: 'String Comparison Result: true'
