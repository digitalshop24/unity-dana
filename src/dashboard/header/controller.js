'use strict';

export default class HeaderCtrl {
    constructor(login, cardStorage, $state, session, auth, api, categoriesService) {
        this.loginService = login;
        this.cardStorage = cardStorage;
        this.session = session;
        this.auth = auth;
        this.$state = $state;
        this.menuProduct = false;
        this.menuA = false;
        this.menuContact = false;
        console.log(this.menuProduct, this.menu123, this.menuContact);
        this.api = api;
        this.categories = Object.assign(this.getCategories());
        this.c =  this.categories.$$state.value;

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

    getCategories() {
        return this.api.get('/categories');
    }
}
