'use strict';


export default class LoginCtrl {
    constructor($modalInstance, auth, $rootScope, $state, registration, recover) {
        this.modalInstance = $modalInstance;
        this.auth = auth;
        this.rootscope = $rootScope;
        this.state = $state;
        this.registration = registration;
        this.recover = recover;
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

    openRecoverPopup() {
        this.close();
        this.recover.open();
    }
}