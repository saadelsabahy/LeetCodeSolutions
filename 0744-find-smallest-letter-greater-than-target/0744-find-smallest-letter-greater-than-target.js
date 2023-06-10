/**
 * @param {character[]} letters
 * @param {character} target
 * @return {character}
 */
var nextGreatestLetter = function(letters, target) {
    let smallestLetter=''
    for (let letter of letters){
        if(letter > target && !smallestLetter){
            smallestLetter= letter
        }
    }
    return smallestLetter||letters[0]
};