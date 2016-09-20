'use strict';


export default class UpdateCtrl {
    constructor(auth, session) {
    	this.auth = auth;
        this.text = '';
        this.session = session;
        console.log(this.session.user);
        this.isAuthenticated = this.session.isAuthenticated;
        if (this.session.user.role == 'Admin') {
            this.role = true;
        }
        else this.role = false;
        
    }

    update() {
        this.text = 'Ожидайте';
        this.auth.updateSetting()
            .then(() => {
                console.log('12341234');
                this.text = 'Обновлено успешно';
            }).catch((err) => {  
                this.text = 'Ошибка обновления';
            });
    }
    
    send() {
        this.text = 'Ожидайте';
        this.auth.sendPrice()
            .then(() => {
                this.text = 'Отправлено успешно';
            }).catch((err) => {  
                this.text = 'Ошибка отправки';
            });
    }

}