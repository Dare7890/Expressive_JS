'use strict'

let words = [["one", "two"], ["three", "four"], ["five", "six"]];
function unionWords(words){
    return words.reduce((current, next) => current.concat(next));
}

console.log(unionWords(words));