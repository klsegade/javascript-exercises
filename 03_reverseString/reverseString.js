const reverseString = function(word) {
    newWord = ''
    for (let i = word.length - 1; i >= 0; --i)
        newWord += word[i]
    return newWord
};

// Do not edit below this line
module.exports = reverseString;
