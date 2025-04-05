const sumAll = function(int1, int2) {
    if (Number.isInteger(int1) && Number.isInteger(int2) && int1 > 0 && int2 >0) {        
    }
    else {
        return 'ERROR'
    }
    sumArray = [int1,int2]
    newArray = sumArray.sort()
    sum = 0
    for (let i = newArray[0]; i <= newArray[1]; i++) {
        sum += i
    }
    return sum

};

// Do not edit below this line
module.exports = sumAll;
