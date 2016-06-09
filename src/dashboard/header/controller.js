'use strict';

export default class HeaderCtrl {
    constructor(login, cardStorage, $state, session, auth) {
        this.loginService = login;
        this.cardStorage = cardStorage;
        this.session = session;
        this.auth = auth;
        this.$state = $state;
    }

    openLoginPopup() {
        this.loginService.open();
    }

    logout() {
        this.auth.logout().then(()=> {
            this.$state.go('dashboard.main');
        });
    }

    search() {
        this.$state.go('dashboard.search',{q: this.query});
    }
}
