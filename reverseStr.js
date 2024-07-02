// Write a function that returns the reverse of a string.

// using for loop
function reverseStr(str) {
    let reversed = "";

    for (let i = str.length - 1; i >= 0; i--) {
        reversed += str[i];   
    }
    return reversed;
}

console.log(reverseStr('Interview, Happy'))

// shortcut way

function reverseString(str) {
    return str.split('').reverse().join('');    
}

console.log(reverseString('hello, cookie'))


