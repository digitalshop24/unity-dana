'use strict';


export default class ProfileCtrl {
    constructor(auth, $rootScope, $state, historyGoods) {
    	this.auth = auth;
        this.rootscope = $rootScope;
        this.state = $state;
        this.success = "";
        this.history = historyGoods;

        this.old_pass = "";
		this.password = "";
		this.password_confirmation = "";
        
        this.name_user = this.auth.session.localStorage._user.name;
        this.last_name = this.auth.session.localStorage._user.last_name;
        this.phone = this.auth.session.localStorage._user.phone;
        this.organization_name =this.auth.session.localStorage._user.organization_name;
        this.inn = this.auth.session.localStorage._user.inn;
        this.ogrn =this.auth.session.localStorage._user.ogrn;
        this.okpo =this.auth.session.localStorage._user.okpo;
        this.okato =this.auth.session.localStorage._user.okato;
        this.requisits =this.auth.session.localStorage._user.requisits;
        this.address = this.auth.session.localStorage._user.address;
    }


    sendEditPass() {
        if (this.password != this.password_confirmation) {
            this.errorText = 'Введенные пароли не совпадают!';
            return;
        }
        this.auth.editPassword({
            current_password: this.old_pass,
            password: this.password,
            password_confirmation: this.password_confirmation
        })
            .then(() => {
                this.success = "Успешно сменили пароль";
                // this.state.go('dashboard.main', {}, {reload: true});

            }).catch((err) => {
                this.errorText = err.ru || "Произошла ошибка";
            });
    }
    sendEditInfo() {
        this.auth.editInfo({
            name: this.name_user,
            last_name: this.last_name,
            phone: this.phone
        })
            .then(() => {
                this.success = "Успешно сменили личные данные";
            }).catch((err) => {
                this.errorText = err.ru || "Произошла ошибка";
            });
    }
    sendEditRec() {
        this.auth.editInfo({
            organization_name: this.organization_name,
            inn: this.inn,
            ogrn: this.ogrn,
            okpo: this.okpo,
            okato: this.okato,
            requisits: this.requisits,
            address: this.address
        })
            .then(() => {
                this.success = "Успешно сменили данные организации";
            }).catch((err) => {
                this.errorText = err.ru || "Произошла ошибка";
            });
    }    
}