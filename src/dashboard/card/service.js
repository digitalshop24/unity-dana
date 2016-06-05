'use strict';

export default class CardService {
    constructor(api) {
        this.api = api;
    }

    getInfo(ids) {
        return this.api.get('/goods/descriptions', {
            params: {
                goods_ids: ids
            }
        }).then((res) => {
            return res.data;
        })
    }

    createOrder(data) {
        return this.api.post('/orders', data).then((res) => {
            return res.data;
        })
    }
}
