const removeFromArray = function(array, ...args) {

    const result = array.filter(check);

    function check(item) {
    return item = !args.includes(item);
    };
    return result;
};

// Do not edit below this line
module.exports = removeFromArray;

//function removes specified input from original array and returns array without input value