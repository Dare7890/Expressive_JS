'use strict'

function isEven(number){
    if (number === 0)
        return true;

    if (number === 1)
        return false;

    number = number > 0 ? number - 2 : number + 2;
    return isEven(number);
}

console.log(isEven(0));
console.log(isEven(1));
console.log(isEven(3));
console.log(isEven(4));

console.log(isEven(50));
console.log(isEven(75));

console.log(isEven(-1));
console.log(isEven(-2));
