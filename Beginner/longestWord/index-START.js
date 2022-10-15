/* CHALLENGE
Given a string of text, write an algorithm that returns the text received in a reversed format. 
E.g reverseString('algorithms') // should return 'smhtirogla'
*/


// My solution
function longestWord(text) {
    const splitText = text.split(' ');
    let longest = '';

    for (let i = 0; i < splitText.length; i++) {
        if (splitText[i].length > longest.length) {
            longest = splitText[i]
        }
    }
    return longest;
}

// For-loop
function longestWord(text) {
    let wordArray = text.split(' ');
    let maxLength = 0;
    let result = '';

    for (let i = 0; i < wordArray.length; i++) {
        if (wordArray[i].length > maxLength) {
            maxLength = wordArray[i].length;
            result = wordArray[i];
        }
    }
}

// Reduce
function longestWord(text) {
    let result = text.split(' ').reduce((maxLengthWord, currentWord) => {
        if (currentWord.length > maxLengthWord.length) {
            return currentWord;
        } else {
            return maxLengthWord;
        }
    }, '')
    return result;
}

// Sort
function longestWord(text) {
    const splitText = text.split(' ');
    const sortedText = splitText.sort((a, b) => b.length - a.length);

    return sortedText[0];
}


module.exports = longestWord