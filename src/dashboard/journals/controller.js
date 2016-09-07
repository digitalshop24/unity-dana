'use strict';


export default class JournalsCtrl {
    constructor(items,  goodsService, $stateParams) {
        this.items = items;
        this.goodsService = goodsService;
        this.categoryName = 'Журналы'
        this.state = $stateParams;
    }

    // loadMore() {
    //     this.goodsService.get(++this.page, this.perPage, this.sort, this.desc, this.category).then(res => {
    //         this.items = this.items.concat(res);
    //         this.hideDownloadButton = !res.length;
    //     });
    // }

    // sortBy(sort) {
    //     this.desc = this.sort == sort ? !this.desc : false;
    //     this.sort = sort;
    //     this.page = 1;
    //     this.goodsService.get(this.page, this.perPage, this.sort, this.desc, this.category).then(res => {
    //         this.items = res;
    //     });
    // }

 

}