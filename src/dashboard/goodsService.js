'use strict';

export default class GoodsService {
    constructor(api) {
        this.api = api;
    }

    get(page, perPage, sort, desc, category) {
        return this.api.get('/goods', {
            params: {
                page: page,
                per_page: perPage,
                sort: sort,
                desc: desc,
                category: category
            }
        }).then((res) => {
            return res.data;
        })
    }
    getUnitiBook(page, perPage, sort, desc, book) {
        return this.api.get('/goods', {
            params: {
                page: page,
                per_page: perPage,
                sort: sort,
                desc: desc,
                book: book
            }
        }).then((res) => {
            return res.data;
        })
    }
    getTextbook(page, perPage, sort, desc, textbook) {
        console.log(page,' ', perPage,' ', sort, ' ', desc, ' ', textbook);
        return this.api.get('/goods', {
            params: {
                page: page,
                per_page: perPage,
                sort: sort,
                desc: desc,
                textbook: textbook
            }
        }).then((res) => {
            console.log(res.data);
            return res.data;
        })
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

    getHistoryGoods() {
        return this.api.get('/orders').then((res) => {
            return res.data;
        })
    }

    getPrice() {
        return this.api.get('/prices').then((res) => {
            return res.data;
        })
    }

    getJournals() {
        return this.api.get('/themes').then((res) => {
            return res.data;
        })
    }


    getByIdJoornal(id) {
        return this.api.get(`/themes/${id}`).then((res) => {
            return res.data;
        })
    }

    getByIdOther(id) {
        return this.api.get(`/themes/${id}/journals`).then((res) => {
            return res.data;
        })
    }

    


    

}