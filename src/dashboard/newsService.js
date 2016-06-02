'use strict';

export default class NewsService {
    constructor(api) {
        this.api = api;
    }

    get(page, perPage) {
        return this.api.get('/posts',{
            params: {
                page: page,
                per_page: perPage
            }
        }).then((res) => {
            return res.data;
        })
    }
}