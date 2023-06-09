/**
 * @param {character[]} letters
 * @param {character} target
 * @return {character}
 */
var nextGreatestLetter = function(letters, target) {
    const sorttedLetters = letters.sort((a,b) => a - b);
    let smallestLetter=''
    for (let letter of sorttedLetters){
        if(letter > target && !smallestLetter){
            smallestLetter= letter
        }
    }
    return smallestLetter||letters[0]
};