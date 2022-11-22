const sumAll = function(firstNum, secondNum) {
let counter = firstNum;
let sum = 0;

//ensuring that the input or argments are not negative numbers ...
// ensuring that the input or argument is type of number before doing any calculation 
isInputNumber = (typeof firstNum === 'number' ) && (typeof secondNum === 'number')
isInputNegative = (firstNum < 0) || (secondNum < 0)
if(isInputNumber === false || isInputNegative == true){
    return 'ERROR'
}

//when the second argument is greater than the first
if (firstNum < secondNum){
    while(counter <= secondNum){
        sum += counter;
        counter++;
    }

}
//when the first argument is greater than the second
else if(firstNum > secondNum){
    while(counter >= secondNum){
        sum += counter;
        counter--;
    }
}


return sum
};

// Do not edit below this line
module.exports = sumAll;
