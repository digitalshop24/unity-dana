'use strict';

export default class BuyButtonCtrl {
    constructor(cardStorage) {
        this.cardStorage = cardStorage;
    }

    buy() {
        this.cardStorage.addItem(this.item);
    }
}
