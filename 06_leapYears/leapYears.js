const leapYears = function(year) {
    if ((Number.isInteger(year)) && (year > 0)) {        
        if (year % 4 === 0) {
            if (year % 400 === 0) {
                return true
            }
            else if (year % 100 === 0) {
                return false
            }
            else {
                return true
            }
        }
        else {
            return false
        }
    }
    else {
        return 'ERROR'
    }
};

// Do not edit below this line
module.exports = leapYears;
