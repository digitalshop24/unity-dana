'use strict';


export default class UpdateCtrl {
    constructor(auth, session, $interval) {
    	this.auth = auth;
        this.text = '';
        this.date ='';
        this.session = session;
        //console.log(this.session.user);
        this.isAuthenticated = this.session.isAuthenticated;
        if (this.session.user.email == 'superadmin@unitydana.com') {
            this.role = true;
        }
        else this.role = false;
        $interval(() => this.showDate(), 500)
    }



    showDate(){
        this.auth.getDate()
            .then(res=> {
                this.date = res;
            }).catch((err) => {
                this.text = 'Ошибка обновления';
            });
    }



    update() {
        this.text = 'Ожидайте...';
        this.auth.updateSetting()
            .then(() => {
                this.text = 'Обновлено успешно';
            }).catch((err) => {
                this.text = 'Ошибка обновления';
            });
    }

    send() {
        this.text = 'Ожидайте...';
        this.auth.sendPrice()
            .then(() => {
                this.text = 'Отправлено успешно';
            }).catch((err) => {
                this.text = 'Ошибка отправки';
            });
    }

}
