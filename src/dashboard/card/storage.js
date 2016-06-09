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
        if(this.goods) {
            value.forEach(item => {
                const foundedItem = this.goods.find(i => i.id == item.id);
                if(foundedItem) {
                    item.amount = +foundedItem.amount || 1;
                }
            });
        }
        this.storage.goods = this._goods = value;
        this.updateCounters();
    }

    addItem(item) {
        item.amount = item.amount || 1;
        var found = this.goods.find(i => i.id == item.id);
        if(!found) {
            this.goods.push(item);
            this.updateCounters();
        } else {
            found.amount++;
        }
    }

    removeItem(item) {
        const itemIndex = this.goods.findIndex(i => i.id == item.id);
        if (itemIndex > -1) {
            this.goods.splice(itemIndex, 1);
        }
        this.updateCounters();
    }

    getItemsId() {
        return [].concat.apply([], this.goods.map(good => Array(+good.amount).fill(good.id)));
    }

    isContained(item) {
        return this.goods.findIndex(i => i.id == item.id) > -1;
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
            return {price: previousValue.price + (currentValue.price*(+currentValue.amount))};
        }, {price: 0}).price;
    }
}
