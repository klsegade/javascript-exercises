const removeFromArray = function(array, ...removal) {    
    for (let i = 0; i < removal.length; i++) {
        let dupCount = array.filter(x => x === removal[i]).length
        posIndex = array.indexOf(removal[i])
        if (posIndex >= 0)
            newArray = array.splice(posIndex,1)
            if (dupCount > 1)
              i--
      }
    return array
};

// Do not edit below this line
module.exports = removeFromArray;

/*
first I need to know how many args
for (let i = 0; i < ...removal.length; i++)
Then I need to find the args within the array

I need to make sure dups are accounted for

*/