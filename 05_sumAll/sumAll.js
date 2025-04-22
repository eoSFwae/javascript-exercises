const sumAll = function(num1, num2) {
    if ((num1 < 0 || num2 <0) || !Number.isInteger(num1) || !Number.isInteger(num2)){
        return 'ERROR'
    }
    else{
        let highest = num2;
        let lowest = num1;
        if(num1 > num2) {
            highest = num1;
            lowest = num2;
        }
        let sum = lowest;

        for(let i = highest; i > lowest; i--){
            sum += i
        }
        return sum
    }

};



// Do not edit below this line
module.exports = sumAll;
