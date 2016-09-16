'use strict';


export default class CardCtrl {
    constructor(auth, cardService, cardStorage, $sce, $rootScope, goods, requisits, modal, session, $state) {
        this.auth = auth;
        this.cardService = cardService;
        this.cardStorage = cardStorage;
        this.sce = $sce;
        console.log('123',goods);
        cardStorage.goods = goods;
        this.goods = cardStorage.goods;
        this.modal = modal;
        this.session = session;
        this.email = this.session.user.email;
        this.phone = this.session.user.phone;
        this.registration = !this.session.isAuthenticated;
        this.legal = false;
        this.afterOrder = false;
        this.state = $state;
        this.requisits = requisits;
        this.req_content = this.sce.trustAsHtml(this.requisits.content);
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
                legal: this.legal,
                password: this.pass,
                registration: this.registration
            }).then(res => {
                console.log(res);
                this.afterOrder = true;
                this.orderResponse = res;
                //tut hochu chuvaka loginit, chtobi poluchat ego istorijy zakazov nizhe
                console.log(res);
                this.session.token = res.user.auth_token;
                this.session.user = Object.assign(this.session.user, res.user);
                this.session.isAuthenticated = true;
            });
            this.cardStorage.clear();
            this.state.go('dashboard.thx');

        }
    }

    removeItem(item) {
        this.cardStorage.removeItem(item);
    }

    callback() {
        this.cardStorage.updateCounters();
    }
}
