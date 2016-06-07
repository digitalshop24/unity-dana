'use strict';

export default class GoodsService {
    constructor(api) {
        this.api = api;
    }

    get(page, perPage, sort, desc) {
        return this.api.get('/goods', {
            params: {
                page: page,
                per_page: perPage,
                sort: sort,
                desc: desc
            }
        }).then((res) => {
            return res.data;
        })
    }

    search(q) {
        return this.api.get('/goods/search', {
            params: {
                query: q
            }
        }).then((res) => {
            return res.data;
        });
    }

    getById(id) {
        return this.api.get(`/goods/${id}`).then((res) => {
            return res.data;
        })
    }

    getHits() {
        return this.api.get('/goods/hit').then((res) => {
            return res.data;
        })
    }

    getNewGoods() {
        return this.api.get('/goods/new').then((res) => {
            return res.data;
        })
    }

    getMainGoods() {
        return this.api.get('/goods/main').then((res) => {
            return res.data;
        })
    }
}