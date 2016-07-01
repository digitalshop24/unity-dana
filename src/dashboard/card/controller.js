'use strict';


export default class CardCtrl {
    constructor(cardService, cardStorage, goods, requisits, modal, session) {
        this.cardService = cardService;
        this.cardStorage = cardStorage;
        cardStorage.goods = goods;
        this.goods = cardStorage.goods;
        this.requisits = requisits;
        this.modal = modal;
        this.session = session;
        this.email = this.session.user.email;
        this.phone = this.session.user.phone;
        this.registration = !this.session.isAuthenticated;
    }

    createOrder() {
        if(this.registration && !this.pass) {
            this.modal.open({
                resolve: {
                    message: () => {
                        return "Введите пароль!";
                    }
                }
            });
        } else if(this.registration && this.pass && this.pass != this.passCheck) {
            this.modal.open({
                resolve: {
                    message: () => {
                        return "Пароли не совпадают!";
                    }
                }
            });
        } else {
            this.cardService.createOrder({
                goods_ids: this.cardStorage.createItemsForOrder(),
                number: this.phone,
                email: this.email,
                registration: this.registration
            }).then(res => {
                this.cardStorage.clear();
                this.email = "";
                this.phone = "";
                this.modal.open({
                    resolve: {
                        message: () => {
                            return res;
                        }
                    }
                });
            });
        }
    }

    removeItem(item) {
        this.cardStorage.removeItem(item);
    }

    callback() {
        this.cardStorage.updateCounters();
    }
}