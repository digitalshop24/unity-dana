'use strict';

export default class BuyButtonCtrl {
    constructor(cardStorage) {
        this.cardStorage = cardStorage;
        this.inCard = cardStorage.isContained(this.item);
    }

    buy() {
        this.cardStorage.addItem(this.item);
        this.inCard = true;
    }
}
