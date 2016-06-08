'use strict';


export default class CardCtrl {
    constructor() {
    }

    decrease() {
        if(this.item.amount > 1) {
            this.item.amount--;
        }
        this.callback();
    }

    increase() {
        this.item.amount++;
        this.callback();
    }
}