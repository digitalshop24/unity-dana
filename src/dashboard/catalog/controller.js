'use strict';


export default class CatalogCtrl {
    constructor(items, page, perPage, goodsService) {
        this.items = items;
        this.page = page;
        this.perPage = perPage;
        this.goodsService = goodsService;
    }

    loadMore() {
        this.goodsService.get(++this.page, this.perPage).then(res => {
            this.items = this.items.concat(res);
        });
    }
}