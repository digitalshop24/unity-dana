'use strict';


export default class CardCtrl {
    constructor(cardService, cardStorage, goods) {
        this.cardService = cardService;
        this.cardStorage = cardStorage;
        cardStorage.goods = goods;
        this.goods = cardStorage.goods;
        this.registration = true;
    }

    createOrder() {
        this.cardService.createOrder({
            goods_ids: this.cardStorage.getItemsId().join(","),
            number: this.phone,
            email: this.email,
            registration: this.registration
        });
    }

    removeItem(item) {
        this.cardStorage.removeItem(item);
    }

    callback() {
        this.cardStorage.updateCounters();
    }
}