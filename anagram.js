// Write a function that checks whether two strings are anagrams or not. An anagram is a word formed by rearranging the letters of another word

function areAnagrams(str1, str2) {
    const sortedStr1 = str1.split("").sort().join("")
    const sortedStr2 = str2.split("").sort().join("")
    return sortedStr1 === sortedStr2
}

console.log(areAnagrams('silent', 'listen'))