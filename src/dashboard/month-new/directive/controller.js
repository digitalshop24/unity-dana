'use strict';

export default class MonthGoodsCtrl {
    constructor() {
    	
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
