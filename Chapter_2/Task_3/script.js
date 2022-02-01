'use strict'

function createDesc(size){
    let desc = '';
    for (let i = 0; i < size; i++) {
        for (let j = 0; j < size; j++) {
            desc += (i % 2 == 0 && j % 2 == 0 || i % 2 != 0 && j % 2 != 0) ? ' ' : '#';
        }
        desc += '\n';
    }

    return desc;
}

function showDesc(desc){
    console.log(desc);
}

const size = 8;
let desc = createDesc(size);
showDesc(desc);