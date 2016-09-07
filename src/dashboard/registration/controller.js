'use strict';


export default class RegistrationCtrl {
    constructor($modalInstance, auth, $rootScope, $state) {
        this.modalInstance = $modalInstance;
        this.auth = auth;
        this.rootscope = $rootScope;
        this.state = $state;
        this.legal = false;
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
            password: this.form.password,
            repeat_password: this.form.password,
            legal: this.legal
        })
            .then(() => {
                this.handleSuccessRegistration();
            }).catch((err) => {
                console.log(err.error);
                this.errorText = err.error || "Произошла ошибка регистрации";
            });
    }

    handleSuccessRegistration() {
        this.form = {};
        this.close();
        this.state.go(this.state.current, {}, {reload: true});
    }
}