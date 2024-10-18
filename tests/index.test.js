const { 
    capitalize,
    reverseString,
    calculator 
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
    test('reverses a common string', () => {
        expect(reverseString('hello')).toBe('olleh');
    })
    test('capitalizes a single character', () => {
        expect(reverseString('a')).toBe('a');
    })
    test('works with empty string', () => {
        expect(reverseString('')).toBe('');
    })
    test('reverses correctly a string with punctuation', () => {
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