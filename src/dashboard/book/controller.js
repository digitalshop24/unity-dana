'use strict';


export default class CatalogBookCtrl {
    constructor(items, page, perPage, goodsService, sort, desc, $stateParams) {
        this.items = items;
        console.log(this.items);
        this.page = page;
        this.perPage = perPage;
        this.goodsService = goodsService;
        this.desc = desc;
        this.sort = sort;
        this.categoryName = "Книги ЮНИТИ";
        this.state = $stateParams;
        // if (this.state.theme == '1') this.style = "height: 150px; background-size: 100%; background-repeat: no-repeat;";
    }

    loadMoreTheme() {
        this.goodsService.getUnitiBook(++this.page, this.perPage, this.sort, this.desc, true).then(res => {
            this.items = this.items.concat(res);
            this.hideDownloadButton = !res.length;
        });
    }

    sortByTheme(sort) {
        this.desc = this.sort == sort ? !this.desc : false;
        this.sort = sort;
        this.page = 1;
        this.goodsService.getUnitiBook(this.page, this.perPage, this.sort, this.desc, true).then(res => {
            this.items = res;
        });
    }

}