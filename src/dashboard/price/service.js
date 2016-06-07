'use strict';

export default class PriceService {
    constructor(api) {
        this.api = api;
    }

    getPrice() {
        return this.api.get('/prices').then((res) => {
            return res.data;
        })
    }
}
