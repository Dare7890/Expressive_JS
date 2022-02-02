'use strict'

function countBs(line){
    const searchedChar = 'B';
    return countChar(line, searchedChar);
}

function countChar(line, searchedChar){
    let counter = 0;
    for(let ch of line){
        if (ch === searchedChar)
            counter++;
    }

    return counter;
}

let line = "tgfhBersdBqNB";
console.log(countBs(line));
line = " ";
console.log(countBs(line));
line = "BBBbB";
console.log(countBs(line));