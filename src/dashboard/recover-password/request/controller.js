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
                this.errorText = err.message || "Произошла ошибка";
            });
    }

    handleSuccessAuth() {
        this.form = {};
        this.close();
        this.state.go('dashboard.recover.page', {}, {reload: true});
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