const reverseString = function(str) {
    let arryOfChar = str.split('')
    let reversedArray = arryOfChar.reverse()
    let reversedStr = reversedArray.join('')
    return reversedStr
};

// Do not edit below this line
module.exports = reverseString;
