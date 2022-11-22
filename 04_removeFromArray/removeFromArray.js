const removeFromArray = function() {
    
    let numberOfArg =  arguments.length;
    let targetArr = arguments[0]
    for(let counter = 1;counter < numberOfArg; counter ++){
     
        let indexOfValueToRemove = targetArr.indexOf(arguments[counter]);
        //ignore non present values in the array
        if(indexOfValueToRemove !== -1){ 
            targetArr.splice(indexOfValueToRemove,1);// remove item from array
        }
        
       
    }
    
    return targetArr;
};

// Do not edit below this line
module.exports = removeFromArray;
