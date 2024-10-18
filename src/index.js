// Function that takes a string and returns it with the first character capitalized.
function capitalize(str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
}

// Function that takes a string and returns it reversed.
function reverseString(str) {
    return str.split('').reverse().join('');
}

// Object that contains functions for the basic operations: add, subtract, divide, and multiply.
const calculator = {
    add: (a, b) => a + b,
    subtract: (a, b) => a - b,
    divide: (a, b) => a / b,
    multiply: (a, b) => a * b
}

// Function that takes a string and a shift factor and returns it with each character “shifted”.
function caesarCipher(str, shift) {
    const charCodes = [];
    for(let i = 0; i < str.length; i++) {
        const char = str[i];
        const code = str.charCodeAt(i);
        if (char.match(/[a-z]/i)) {
            // Dealing with uppercase
            if (code >= 65 && code <= 90 ) {
            charCodes.push((code - 65 + shift) % 26 + 65);
            // Dealing with lowercase
            } else if (code >= 97 && code <= 122) {
                charCodes.push((code - 97 + shift) % 26 + 97);
            }
        } else {
            charCodes.push(code);
        }
    }
    return String.fromCharCode(...charCodes);
}

// Function that takes an array of numbers and returns an object with the following properties: average, min, max, and length.
function analyzeArray(arr) {
    const sum = arr.reduce((acc, val) => acc + val, 0);
    const average = sum / arr.length;
    const min = Math.min(...arr);
    const max = Math.max(...arr);
    const length = arr.length;
    return {average, min, max, length};
}

module.exports = { 
    capitalize,
    reverseString,
    calculator,
    caesarCipher,
    analyzeArray
};