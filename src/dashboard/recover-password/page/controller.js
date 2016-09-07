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
                this.state.go('dashboard.main');
                this.errorText = "Вы успешно изменили пароль!"
            }).catch((err) => {
                console.log(err)
                this.errorText = err.ru || "Произошла ошибка, повторите!";
            });
    }
}