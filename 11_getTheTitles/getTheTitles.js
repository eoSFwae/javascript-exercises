const getTheTitles = function(arr) {
   return arr.map(item =>  item.title)
};

// Do not edit below this line
module.exports = getTheTitles;
const books = [
    {
        title: 'Book',
        author: 'Name'
    },
    {
        title: 'Book2',
        author: 'Name2'
    }
]

console.log(getTheTitles(books))