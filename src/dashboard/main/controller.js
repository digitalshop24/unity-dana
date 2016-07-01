'use strict';


export default class MainCtrl {
    constructor(hits, newGoods, modal, usersService) {
        this.hits = hits;
        this.newGoods = newGoods;
        this.modal = modal;
        this.usersService = usersService;
        this.novelty = true;
        this.price = true;
    }

    subscribe() {
        this.usersService.subscribe(this.email, this.novelty, this.price).then(res => {
            this.modal.open({
                resolve: {
                    message: () => {
                        return 'Вы успешно подписаны';
                    }
                }
            });
        });
    }
}