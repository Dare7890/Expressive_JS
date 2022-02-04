'use strict'

function loop(value, condition, update, body){
    if (!condition(value))
        return;

    body(value);
    return loop(update(value), condition, update, body);
}

loop(0, n => n < 3, n => n + 1, console.log);