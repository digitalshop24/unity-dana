'use strict';


export default class JournalsCtrl {
    constructor(items,  goodsService, $stateParams) {
        this.items = items;
        this.goodsService = goodsService;
        this.categoryName = 'Журналы'
        this.state = $stateParams;
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