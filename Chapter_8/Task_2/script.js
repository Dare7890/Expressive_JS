'use strict'

const bох = { 
    locked: true, 
    unlock() { this.locked = false; }, 
    lock() { this.locked = true; }, 
    _content: [1, 2, 3], 
    get content() {
        if (this.locked)
            throw new Error("Зanepтo");

        return this._content;
    } 
};

function withBoxUnlocked(showConent){
    box.unlock();
    try {
        showConent(box.content());
    }
    finally{
        box.lock();
    }
}