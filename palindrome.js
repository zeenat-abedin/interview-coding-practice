// Write a function that checks whether a string is palindrome or not.

function isPalindrome(str) {
    let revStr = str.split('').reverse().join('');
    return str === revStr
}

console.log(isPalindrome('racecar')) //true

