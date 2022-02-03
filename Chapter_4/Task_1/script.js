'use strict'

function range(start, end, step = 1){
    let numbers = [];
    if (start > end){
        [start, end] = [end, start];
        step = Math.abs(step);
    }

    for (let i = start; i <= end; i += step)
        numbers.push(i);

    return numbers;
}

function sum(numbers){
    let sum = 0;
    for (let index = 0; index < numbers.length; index++)
        sum += numbers[index];

    return sum;
}