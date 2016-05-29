'use strict';

export default class GoodsService {
    constructor(api) {
        this.api = api;
    }

    get(page, perPage) {
        return this.api.get('/goods',{
            params: {
                page: page,
                per_page: perPage
            }
        }).then((res) => {
            return res.data;
        })
    }

    getHits() {
        return this.api.get('/goods/hit').then((res) => {
            return res.data;
        })
    }
}