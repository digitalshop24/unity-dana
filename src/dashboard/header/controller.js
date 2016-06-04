'use strict';

export default class HeaderCtrl {
    constructor(login, cardStorage) {
        this.loginService = login;
        this.cardStorage = cardStorage;
    }

    openLoginPopup() {
        this.loginService.open();
    }
}
