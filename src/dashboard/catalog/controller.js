'use strict';


export default class CatalogCtrl {
    constructor(items, page, perPage, goodsService, sort, desc, category, $stateParams) {
        this.items = items;
        this.page = page;
        this.perPage = perPage;
        this.goodsService = goodsService;
        this.desc = desc;
        this.sort = sort;
        this.category = category;
        this.categoryName = this.items.length ? this.items[0].category_name : '';
        if (this.category == undefined) this.categoryName = '';
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
    edit_name(name) {
        var name_end = '';
        if (name.length > 60) {
           var name_mass = name.split(' '); 
           for(var i = 0; i < name_mass.length; i++) {
                if (name_end.length < 60 ) {
                    name_end = name_end +' '+name_mass[i];
                }
                else return name_end;   
            }   
        }    
        else return name;     
    }
}