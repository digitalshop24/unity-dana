'use strict';


export default class CatalogThemeCtrl {
    constructor(items, page, perPage, goodsService, sort, desc, category, $stateParams) {
        this.items = items;
        this.page = page;
        this.perPage = perPage;
        this.goodsService = goodsService;
        this.desc = desc;
        this.sort = sort;
        this.category = category;
        this.categoryName = this.items.length ? this.items[0].category_name : '';
        this.state = $stateParams;
        
    }

    loadMore() {
        this.goodsService.get(++this.page, this.perPage, this.sort, this.desc, this.category).then(res => {
            this.items = this.items.concat(res);
            this.hideDownloadButton = !res.length;
        });
    }

    sortBy(sort) {
        this.desc = this.sort == sort ? !this.desc : false;
        this.sort = sort;
        this.page = 1;
        this.goodsService.get(this.page, this.perPage, this.sort, this.desc, this.category).then(res => {
            this.items = res;
        });
    }

}