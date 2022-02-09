'use strict'

function multiply(a, b){
    let mult = 0;
    try
    {
        mult = primitiveMultiply(a, b);
    }
    catch(error){
        if (!error instanceof MultiplicatorUnitFailure)
            return;
        
        console.log("error");
        mult = multiply(a, b);
    }

    return mult;
}

function primitiveMultiply(a, b){
    const successProbability  = 0.2;
    if (Math.random() <= successProbability )
        return a * b;

    throw new MultiplicatorUnitFailure();
}

class MultiplicatorUnitFailure extends Error{
    constructor(message){
        super(message);
        this.message = message;
    }
}

console.log(multiply(2, 3));
console.log(multiply(3, 4));