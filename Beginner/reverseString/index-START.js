/* CHALLENGE
Given a string of text, write an algorithm that returns the text received in a reversed format. 
E.g reverseString('algorithms') // should return 'smhtirogla'
*/

////////////// Chaining built-in methods

function reverseString(text) {
    // Code goes here
    return text.split('').reverse().join('');
}

/////////////// For-loop way

function reverseString(text) {
    let result = '';

    for (let i = text.length - 1; i >= 0; i--) {
        result += text[i];
    }
    return result;
}

/////////////// For-of loop way

function reverseString(text) {
    let result = '';

    for (let char of text) {
        result = char + result;
    }
    return result;
}

////////////// Recursion way

function reverseString(text) {
// Terminal case: The case that ends the recursion. Checks if the string is empty and ends it immediately if it is. Without his, the process would continue in an endless loop.
    if (text === '') {
        return '';      
    } else {
        return reverseString(text.substr(1)) + text[0];
    }
}

// Reduce method

function reverseString(text) {
    return text.split('').reduce((acc, char) => char + acc, '');
}

module.exports = reverseString