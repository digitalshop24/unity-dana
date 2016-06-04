'use strict';

export default class CardStorage {
    constructor($localStorage) {
        this.storage = $localStorage.$default({
            goods: []
        });
        this.goods = this.storage.goods;
        this.updateCounters();
    }

    get goods() {
        return this._goods;
    }

    set goods(value) {
        this.storage.goods = this._goods = value;
    }

    addItem(item) {
        this.goods.push(item);
        this.updateCounters();
    }

    updateCounters() {
        this.updateAmountValue();
        this.updatePriceValue();
    }

    updateAmountValue() {
        this.itemsAmount = this.goods.length;
    }

    updatePriceValue() {
        this.resultPrice = this.goods.reduce(function (previousValue, currentValue) {
            return {price: previousValue.price + currentValue.price};
        }, {price: 0}).price;
    }
}
