'use strict';


export default class JoornalDetailsCtrl {
    constructor(item, item_other, $sce, $rootScope) {
    	this.sce = $sce;
        this.item = item;
        this.item_other = item_other;
        this.rubrics = this.item.rubrics;
        console.log(this.item);
        console.log(this.item_other);
        for (var i = 0; i < this.rubrics.length; i++) {
        	this.rubrics[i].text =  this.sce.trustAsHtml(this.rubrics[i].text);
        }
        


        // this.newGoods = newGoods;
    }
}