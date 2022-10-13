/* CHALLENGE
Given a string of text, return the number of vowels found within the text
e.g vowelsCounter('anehizxcv') // will return 3
*/

////////// Iterative approach

function vowelsCounter(text) {
    const vowels = ['a', 'e', 'i', 'o', 'u'];
    let vowelCounter = 0;

    for (let i = 0; i < text.length; i++) {
        if (vowels.includes(text[i].toLowerCase())) {
            vowelCounter++;
        }
    }
    return vowelCounter;
}

/////////// Regex

function vowelsCounter(text) {
    let matchingInstances = text.match(/[aeiou]/gi);

    if (matchingInstances) {
        return matchingInstances.length;
    } else {
        return 0;
    }
}

module.exports = vowelsCounter;
