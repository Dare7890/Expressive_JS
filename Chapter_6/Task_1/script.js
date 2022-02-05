'use strict'

class Vec{
    constructor(x, y){
        this.x = x;
        this.y = y;
    }

    plus(vec){
        let newX = this.x + vec.x;
        let newY = this.y + vec.y;

        return new Vec(newX, newY);
    }

    minus(vec){
        let newX = this.x - vec.x;
        let newY = this.y - vec.y;
        
        return new Vec(newX, newY);
    }

    get length(){
        let startVec = new Vec(0, 0);
        const power = 2;

        return Math.sqrt(Math.pow((startVec.x - this.x ), power) + Math.pow((startVec.y - this.y), power));
    }
}

let a = new Vec(1, 4);
let b = new Vec(-1, 8);

let sum = a.plus(b);
let sub = a.minus(b);

console.log(sum);
console.log(sub);
console.log(a.length);