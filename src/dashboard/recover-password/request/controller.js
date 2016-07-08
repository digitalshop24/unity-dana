'use strict';


export default class LoginCtrl {
    constructor($modalInstance, auth, $rootScope, $state, registration) {
        this.modalInstance = $modalInstance;
        this.auth = auth;
        this.rootscope = $rootScope;
        this.state = $state;
        this.registration = registration;
    }

    close() {
        this.modalInstance.close();
    }

    send() {
        this.auth.recoverPass({
            email: this.form.email,
        })
            .then(() => {
                this.handleSuccessAuth();
            }).catch((err) => {
                $('#password').css('border-color', 'red');
                this.form.password = undefined;
                this.errorText = err.message || "Произошла ошибка авторизации";
            });
    }

    handleSuccessAuth() {
        this.form = {};
        this.close();
        this.state.go(this.state.current, {}, {reload: true});
    }


    openRegistrationPopup() {
        this.close();
        this.registration.open();
    }

    recoverPassword() {
        this.close();
        this.state.go('dashboard.recover-password');
    }
}