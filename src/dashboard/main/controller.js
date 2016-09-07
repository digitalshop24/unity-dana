'use strict';


export default class MainCtrl { 
    constructor(hits, newGoods, modal, usersService, $stateParams, $state) {
        this.hits = hits;
        this.newGoods = newGoods;
        this.modal = modal;
        this.usersService = usersService;
        this.novelty = true;
        this.price = true;
        this.stateParams = $stateParams;
        this.state = $state;
        this.arrowsPrev = '<button type="" class="slick-prev"></button>'
        this.arrowsNext = '<a href="" ><i class="fa fa-angle-right" aria-hidden="true"></i></a>'
 
    }

    subscribe() {
        this.usersService.subscribe(this.email, this.novelty, this.price).then(res => {
            this.modal.open({
                resolve: {
                    message: () => {
                        return 'Вы успешно подписаны на рассылку!';
                    }
                }
            });
        });
    }
}