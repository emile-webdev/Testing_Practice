const { 
    capitalize,
    reverseString,
    calculator,
    caesarCipher,
    analyzeArray
} = require('../src/index');

describe('capitalize', () => {
    test('capitalizes the first character of a string', () => {
        expect(capitalize('hello world')).toBe('Hello world');
    })
    test('capitalizes a single character', () => {
        expect(capitalize('a')).toBe('A');
    })
    test('works with empty string', () => {
        expect(capitalize('')).toBe('');
    })
    test('does not modify already capitalized string', () => {
        expect(capitalize('Hello')).toBe('Hello');
    })
})

describe('reverseString', () => {
    test('test reversing a common string', () => {
        expect(reverseString('hello')).toBe('olleh');
    })
    test('test capitalizing a single character', () => {
        expect(reverseString('a')).toBe('a');
    })
    test('test if it works with empty string', () => {
        expect(reverseString('')).toBe('');
    })
    test('test reversing correctly a string with punctuation', () => {
        expect(reverseString('Hello!')).toBe('!olleH');
    })
})

describe('calculator', () => {
    test('test addition', () => {
        expect(calculator.add(2, 3)).toBe(5);
    })
    test('test subtraction', () => {
        expect(calculator.subtract(5, 3)).toBe(2);
    })
    test('test dividing', () => {
        expect(calculator.divide(6, 3)).toBe(2);
    })
    test('test multiplying', () => {
        expect(calculator.multiply(2, 3)).toBe(6);
    })
})

describe('caesarCipher', () => {
    test('test shifting characters with a shift factor', () => {
        expect(caesarCipher('hello world', 3)).toBe('khoor zruog');
    })
    test('test wrapping from z to a', () => {
        expect(caesarCipher('z', 1)).toBe('a');
    })
    test('test case preservation', () => {
        expect(caesarCipher('Hello world', 3)).toBe('Khoor zruog');
    })
    test('test punctuation', () => {
        expect(caesarCipher('Hello, world!', 3)).toBe('Khoor, zruog!');
    })
})

describe('analyzeArray', () => {
    test('test average, min, max, length of array', () => {
        expect(analyzeArray([1,8,3,4,2,6])).toEqual({
            average: 4,
            min: 1,
            max: 8,
            length: 6
        });
    })
    test('test average, min, max, length of array with negative numbers', () => {
        expect(analyzeArray([-1,0,1])).toEqual({
            average: 0,
            min: -1,
            max: 1,
            length: 3
        });
    })
    test('test an empty object for an empty array', () => {
        expect(analyzeArray([])).toEqual({
            average: NaN,
            min: Infinity,
            max: -Infinity,
            length: 0
        });
    })
})