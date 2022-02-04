'use strict'

function every(values, predicate){
    for (const value of values) {
        if (!predicate(value))
            return false;
    }

    return true;
}

function everyWithSome(values, predicate){
    return !values.some(e => !predicate(e));
}

console.log(every([1, 2, 3, 4, 5], n => n > 5));
console.log(every([1, 2, 3, 4, 5], n => n < 6));

console.log(everyWithSome([1, 2, 3, 4, 5], n => n > 5));
console.log(everyWithSome([1, 2, 3, 4, 5], n => n < 6));