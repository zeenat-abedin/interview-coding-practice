// Write a function that returns the longest word in the sentence.

function findLongestWord(str) {
    let words = str.split(" ")
    let longestWord = ""

    for (let word of words) {
        if (word.length > longestWord.length) {
           longestWord = word
        }
    }
    return longestWord
}

console.log(findLongestWord("I love coding in Javascript"))