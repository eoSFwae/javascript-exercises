const fibonacci = function(number) {
    if(number < 0){
        return "OOPS";
    }
    let fib = []
    for (let i = 0; i <= number; i++) {
        if( i === 0 || i === 1){
            fib.push(i)
        }
        else{
            let a = fib[i - 2]
            let b = fib[i - 1]
            fib.push(a + b)
        }

    }

    return fib[number]
};

// Do not edit below this line

console.log(fibonacci(6));
module.exports = fibonacci;
