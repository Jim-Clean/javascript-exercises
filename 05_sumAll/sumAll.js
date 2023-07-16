const sumAll = function(number1, number2) {
    
    let sum = 0;

    if (Math.sign(number1) != 1 || Math.sign(number2) != 1 || typeof number1 != 'number' || typeof number2 != 'number'){
        sum = "ERROR"
    } else if (number1 > number2){
        for (var i = number2; i <= number1; i++) {
            sum += i;
        };
    } else {
        for (var i = number1; i <= number2; i++) {
            sum += i;
        };
    };
    return sum;
};

// Do not edit below this line
module.exports = sumAll;

//when working with numbers need to start stored value at 0!