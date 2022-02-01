'use strict'

function showTriangle(height){
    const triangleChar = '#';
    for (let i = 0; i <= height; i++) {
        for (let j = 0; j < i; j++) {
            console.log(triangleChar);
        }

        console.log('\n');
    }
}

showTriangle(7);