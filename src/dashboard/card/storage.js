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
        this.updateCounters();
    }

    addItem(item) {
        if(!this.goods.find(i => i.id == item.id)) {
            this.goods.push(item);
            this.updateCounters();
        }
    }

    removeItem(item) {
        const itemIndex = this.goods.findIndex(i => i.id == item.id);
        if (itemIndex > -1) {
            this.goods.splice(itemIndex, 1);
        }
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
