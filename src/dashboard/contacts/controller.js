'use strict';


export default class ContactsCtrl {
    constructor() {
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
}