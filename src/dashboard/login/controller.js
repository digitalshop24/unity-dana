'use strict';


export default class LoginCtrl {
    constructor($modalInstance, auth, $rootScope, $state) {
        this.modalInstance = $modalInstance;
        this.auth = auth;
        this.rootscope = $rootScope;
        this.state = $state;
    }

    close() {
        this.modalInstance.close();
    }

    send() {
        this.auth.login({
            email: this.form.email,
            password: this.form.password
        })
            .then(() => {
                this.handleSuccessAuth();
            }).catch((err) => {
                $('#password').css('border-color', 'red');
                this.form.password = undefined;
                this.rootscope.alreadyInLoginModal = false;
                this.message = err.message || "Произошла ошибка авторизации";
            });
    }

    handleSuccessAuth() {
        this.form = {};
        this.close();
        this.state.go(this.state.current, {}, {reload: true});
    }


    goToRegistration() {
        this.close();
        this.state.go('dashboard.registration');
    }

    recoverPassword() {
        this.close();
        this.state.go('dashboard.recover-password');
    }
}