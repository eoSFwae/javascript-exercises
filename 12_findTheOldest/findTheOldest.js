const findTheOldest = function(arr) {
    for( let person of arr){
        if(!(person.hasOwnProperty("yearOfDeath"))){
            person["yearOfDeath"] =  new Date().getFullYear();
        }
    }
    return arr.sort((a,b) => (b.yearOfDeath - b.yearOfBirth) - (a.yearOfDeath - a.yearOfBirth))[0];
};

// Do not edit below this line
// Return oldest person
// You should return the whole person object, but the tests mostly just check to make sure the name is correct.
// There are many ways of doing this using built-in array methods like reduce, or even chaining multiple!
// One of the tests checks for people with no death-date.. use JavaScript's Date function to get their age as of today.

const people = [
    {
        name: "Carly",
        yearOfBirth: 1942,
        yearOfDeath: 1970,
    },
    {
        name: "Ray",
        yearOfBirth: 1962,
        yearOfDeath: 2011,
    },
    {
        name: "Jane",
        yearOfBirth: 1912,
        yearOfDeath: 1941,
    },
]

console.log(findTheOldest(people));

module.exports = findTheOldest;
