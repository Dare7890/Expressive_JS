'use strict'

class Group{
    constructor(){
        this.values = [];
    }

    add(value){
        if (this.has(value))
            return;

        this.values.push(value);
    }

    has(value){
        return this.values.includes(value);
    }

    delete(value){
        let deletedIndex = this.values.indexOf(value);
        if (deletedIndex !== -1){
            const deletedValuesAmount = 1;
            this.values.splice(deletedIndex, deletedValuesAmount);
        }
    }

    static form(values){
        let group = new Group();
        for (const value of values) {
            group.add(value);
        }

        return group;
    }

    [Symbol.iterator](){
        return new GroupIterator(this);
    }
}

class GroupIterator{
    current;

    constructor(group){
        this.group = group;
        this.current = 0;
    }

    next(){
        if (this.current === this.group.values.length)
            return {done: true};

        const result = {
            value: this.group.values[this.current],
            done: false
        }

        this.current++;

        return result;
    }
}

let values = [3, 4, 1, 3, 5, 4];
let group = Group.form(values);
for (const value of group) {
    console.log(value);
}