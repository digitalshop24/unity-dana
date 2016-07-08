'use strict';


export default class CatalogThemeCtrl {
    constructor(items, page, perPage, goodsService, sort, desc, theme, $stateParams) {
        this.items = items;
        this.page = page;
        this.perPage = perPage;
        this.goodsService = goodsService;
        this.desc = desc;
        this.sort = sort;
        this.theme = theme;
        // this.categoryName = this.items.length ? this.items[0].category_name : '';
        this.state = $stateParams;
        if (this.state.theme == '1') this.height = "height: 150px;";
        console.log(this.state);
        
    }

    loadMoreTheme() {
        this.goodsService.getTheme(++this.page, this.perPage, this.sort, this.desc, this.theme).then(res => {
            this.items = this.items.concat(res);
            this.hideDownloadButton = !res.length;
        });
    }

    sortByTheme(sort) {
        this.desc = this.sort == sort ? !this.desc : false;
        this.sort = sort;
        this.page = 1;
        this.goodsService.getTheme(this.page, this.perPage, this.sort, this.desc, this.theme).then(res => {
            this.items = res;
        });
    }

}