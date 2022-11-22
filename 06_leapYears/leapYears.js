const leapYears = function(year) {
    //a year is leap year if it's divisable by 4 and not 100
    if(year % 4 === 0 && year % 100 !== 0){
        return true
    }
    // if a year instead is divisable by 100, and also divisable by 400 then 
    // it is a leap year also
    else if(year % 100 === 0 && year % 400 === 0 ){
        return true
    }
    //if a year is divisable by 100 but not by 400 then it is NOT a leap year
    else{
        return false
    }
};

// Do not edit below this line
module.exports = leapYears;
