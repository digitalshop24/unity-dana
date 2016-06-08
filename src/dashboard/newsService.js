'use strict';

export default class NewsService {
    constructor(api) {
        this.api = api;
    }

    get(page, perPage, category, url) {
        return this.api.get('/posts',{
            params: {
                page: page,
                per_page: perPage,
                category: category,
                url: url
            }
        }).then((res) => {
            return res.data;
        })
    }
}