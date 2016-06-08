'use strict';

export default class HeaderCtrl {
    constructor(login, cardStorage, $state, session) {
        this.loginService = login;
        this.cardStorage = cardStorage;
        this.session = session;
        this.$state = $state;
    }

    openLoginPopup() {
        this.loginService.open();
    }

    search() {
        this.$state.go('dashboard.search',{q: this.query});
    }
}
