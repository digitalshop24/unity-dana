'use strict';


export default class CatalogThemeCtrl {
    constructor(items, page, perPage, goodsService, sort, desc, $stateParams) {
        this.items = items;
        this.page = page;
        this.perPage = perPage;
        this.goodsService = goodsService;
        this.desc = desc;
        this.sort = sort;
        this.categoryName = "Электронные учебники";
        this.state = $stateParams;
        this.style = "height: 150px; background-size: 100%; background-repeat: no-repeat;";
    }

    loadMoreTheme() {
        this.goodsService.getTextbook(++this.page, this.perPage, this.sort, this.desc, true).then(res => {
            this.items = this.items.concat(res);
            this.hideDownloadButton = !res.length;
        });
    }

    sortByTheme(sort) {
        this.desc = this.sort == sort ? !this.desc : false;
        this.sort = sort;
        this.page = 1;
        this.goodsService.getTextbook(this.page, this.perPage, this.sort, this.desc, true).then(res => {
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