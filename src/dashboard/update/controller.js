'use strict';


export default class UpdateCtrl {
    constructor(auth) {
    	this.auth = auth;
    }

    update() {
        this.auth.updateSetting()
            .then(() => {
            }).catch((err) => {  
            });
    }
    
    send() {
        this.auth.sendPrice()
            .then(() => {
            }).catch((err) => {  
            });
    }

}