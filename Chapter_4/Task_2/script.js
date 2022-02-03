'use strict'

function reverseArray(values){
    let reversedValues = [];
    for (let i = 0; i < values.length; i++)
        reversedValues.unshift(values[i]);

    return reversedValues;
}

function reverseArrayinPlace(values){
    for (let i = 0; i < values.length / 2; i++){
        let temp = values[i];
        const exchangeValueFromEndIndex = values.length - i - 1;
        values[i] = values[exchangeValueFromEndIndex];
        values[exchangeValueFromEndIndex] = temp;
    }

    return values;
}

console.log(reverseArrayinPlace([1, 2, 3, 4, 5]));