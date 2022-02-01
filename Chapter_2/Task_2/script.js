'use strict'

function showNumbersSequence(){
    const minNumber = 1;
    const maxNumber = 100;

    let currentNumber = minNumber;
    while (currentNumber <= maxNumber) {
        if (currentNumber % 3 === 0)
            console.log("Fizz");
        else if (currentNumber % 5 === 0)
            console.log("Buzz");
        else
            console.log(currentNumber);

        currentNumber++;
    }
}

showNumbersSequence();