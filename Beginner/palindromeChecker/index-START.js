/* CHALLENGE
Given a string of text, return true or false indicating whether or not the text is a palindrome.
e.g palindromeChecker('racecar') // will return true
*/



// An intuitive approach
function palindromeChecker(text) {
    const reversedText = text.split('').reverse().join('');

    return text.toLowerCase() === reversedText.toLowerCase();
}

// Looping and comparing
function palindromeChecker(text) {
    let charArray = text.toLowerCase().split('');

    let result = charArray.every((letter, index) => {
        return letter === charArray[charArray.length - index - 1];
    });

    return result;
}

// Looping and comparing optimized
function palindromeChecker(text) {
    let textLength = text.length;
    for (let i = 0; i < textLength/2; i++) {
        if (text[i] !== text[textLength - 1 - i]) {
            return false;
        }
    }
    return true;
}

module.exports = palindromeChecker;