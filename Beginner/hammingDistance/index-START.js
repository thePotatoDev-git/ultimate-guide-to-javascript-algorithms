/* CHALLENGE
Given two strings of equal length, calculate and return the the hamming distance.
E.g hammingDistance('rover', 'river') // should return 1
*/




function hammingDistance(stringA, stringB) {
    let hamDistance = 0;

    if (stringA.length === stringB.length) {
        for (let i = 0; i < stringA.length; i++) {
            if (stringA[i].toLowerCase() !== stringB[i].toLowerCase()) {
                hamDistance++
            }
        }
        return hamDistance;
    } else {
        return 'Strings do not have equal length'
    }
    
}



module.exports = hammingDistance