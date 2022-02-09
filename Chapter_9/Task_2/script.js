'use strict'

let text = "Как говорил автор: 'слова автора'. Д'Артаньян. 'слова автора'. Д'Артаньян.";
let pattern = /'/g;
let quotes = text.replace(pattern, (match, i) => {
    return /([А-Я]|[а-я])/.test(text[i - 1]) && /([А-Я]|[а-я])/.test(text[i + 1]) ? "\'" : "\"";
});

console.log(quotes);