const reverseString = function(word) {
    let reversedWord = []
    for(let i = word.length - 1; i >= 0; i--) {
        reversedWord.push(word[i])
    }
    return reversedWord.join('');
};

// console.log(reverseString("hello world"));

// Do not edit below this line
module.exports = reverseString;
