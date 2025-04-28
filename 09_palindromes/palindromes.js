const palindromes = function (word) {
    let stripped = word.replace(/[!"#$%&'()*+,-./:;<=>?@[\]^_`{|}~ ]/g, '').toLowerCase().split('');
    let reversed = stripped.slice().reverse()

    console.log(stripped)
    console.log(reversed)

    for(let index = 0; index < reversed.length; index++) {
        if (!(reversed[index] === stripped[index])) {
            return false
        }

    }
    return true
};


console.log(palindromes('wow'));
// Do not edit below this line
module.exports = palindromes;
