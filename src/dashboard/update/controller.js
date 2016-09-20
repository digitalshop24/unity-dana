'use strict';


export default class UpdateCtrl {
    constructor(auth) {
    	this.auth = auth;
        this.text = '';
    }

    update() {
        this.auth.updateSetting()
            .then(() => {
                console.log('12341234');
                this.text = 'Обновлено успешно';
            }).catch((err) => {  
                this.text = 'Ошибка обновления';
            });
    }
    
    send() {
        this.auth.sendPrice()
            .then(() => {
                this.text = 'Отправлено успешно';
            }).catch((err) => {  
                this.text = 'Ошибка отправки';
            });
    }

}