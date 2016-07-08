'use strict';


export default class ContactsCtrl {
    constructor(contactsService) {
        this.name = "";
        this.phone = "";
        this.email = "";
        this.message = "";
        this.sendMessege = true;
        this.contact = contactsService;
        this.point = {
            geometry: {
                type: 'Point',
                coordinates: [37.49117, 55.788753]
            },
            // Свойства
            properties: {
                balloonContent: 'Москва. unity-dana',
                hintContent: 'Москва. unity-dana'
            }
        }
    }
    sendContact() {
        this.contact.postContact({
            name: this.name,
            number: this.phone,
            email: this.email,
            message: this.message
        }).then(res => {
            this.sendMessege = false;
        });
    }

}