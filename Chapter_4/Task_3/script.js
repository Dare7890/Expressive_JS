'use strict'

function arrayToList(values){
    if (values.length === 0)
        return createListNode(undefined);

    let list = createListNode(values[0]);
    if (values.length === 1)
        return list;

    let parent = list;
    for (let i = 1; i < values.length; i++) {
        setRest(parent, values[i]);
        parent = parent.rest;
    }

    return list;
}

function prepend(element, list){
    let newList = createListNode(element);
    newList.rest = list;

    return newList;
}

function nth(elementIndex, list){
    let parent = list;
    for (let i = 0; i < elementIndex; i++) {
        if (parent.rest === null)
            return undefined;

        parent = parent.rest;
    }

    return parent.value;
}

function listToArray(values){
    if (values.length === 0)
        return [];

    let array = [];
    let parent = values;
    while (parent.rest != null) {
        array.push(parent.value);
        parent = parent.rest;
    }

    array.push(parent.value);

    return array;
}

function setRest(parent, value){
    parent.rest = createListNode(value);
}

function createListNode(value){
    return {
        value: value,
        rest: null
    }
}

let values = [1, 2, 3, 4];
let list = arrayToList(values);
console.log(list);
let array = listToArray(list);
console.log(array);
let element = 5;
let newList = prepend(element, list);
console.log(newList);
list.value = 6;
console.log(newList);
console.log(nth(0, newList));
console.log(nth(3, newList));
console.log(nth(10, newList));
