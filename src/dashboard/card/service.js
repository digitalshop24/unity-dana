'use strict';

export default class CardService {
    constructor(api) {
        this.api = api;
    } 

    createOrder(data) {
        return this.api.post('/orders', data).then((res) => {
            return res.data;
        })
    }
    getOrder(data) {
        return this.api.post('/orders', data).then((res) => {
            return res.data;
        })
    }

    getRequisits() {
        return this.api.get('/requisits').then((res) => {
            return res.data;
        })
    }
}
