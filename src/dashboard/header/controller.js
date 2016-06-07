'use strict';

export default class HeaderCtrl {
    constructor(login, cardStorage, $state) {
        this.loginService = login;
        this.cardStorage = cardStorage;
        this.$state = $state;
    }

    openLoginPopup() {
        this.loginService.open();
    }

    search() {
        this.$state.go('dashboard.search',{q: this.query});
    }
}
