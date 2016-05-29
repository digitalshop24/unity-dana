'use strict';


export default class RegistrationCtrl {
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
        if (this.form.password != this.form.passwordConfirmation) {
            this.errorText = 'Введенные пароли не совпадают!';
            return;
        }


        this.auth.register({
            email: this.form.email,
            password: this.form.password
        })
            .then(() => {
                this.handleSuccessRegistration();
            }).catch((err) => {
                this.errorText = err.message || "Произошла ошибка регистрации";
            });
    }

    handleSuccessRegistration() {
        this.form = {};
        this.close();
        this.state.go(this.state.current, {}, {reload: true});
    }
}