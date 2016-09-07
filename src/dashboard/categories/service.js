'use strict';

export default class CategoriesService {
    constructor(api) {
        this.api = api;
    }

    getCategories() {
        return this.api.get('/categories').then((res) => {
            return res.data;
        })

    }
}
