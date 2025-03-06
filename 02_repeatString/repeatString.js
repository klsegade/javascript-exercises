const repeatString = function(anyString,posNumber) {
    ans = ''
    if (posNumber < 0) 
        return 'ERROR';    
    for (let i = 0; i < posNumber; i++)
        ans += anyString
    return ans

};

// Do not edit below this line
module.exports = repeatString;
