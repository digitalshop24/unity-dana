'use strict';


export default class RecoverCtrl {
    constructor(auth, $rootScope, $state, registration) {
    	this.auth = auth;
        this.rootscope = $rootScope;
        this.state = $state;
        this.registration = registration;
        this.token = '';
        this.newPass = '';
        this.newPassTwo = '';
    }

    sendPass() {
        this.auth.sendNewPass({
        	reset_password_token: this.token,
            password: this.newPass,
            password_confirmation: this.newPassTwo
        })
            .then(() => {
                this.handleSuccessAuth();
                this.errorText = "Запрос на востановление пароля, отправлен"
            }).catch((err) => {
                this.errorText = err.message || "Произошла ошибка, повторите!";
            });
    }
}