'use strict';

import angular from 'angular';
import JoornalDetailsCtrl from './controller.js';

export default angular.module('dashboard.joornaldetails', [
])
    .config(function ($stateProvider) {
        $stateProvider
            .state('dashboard.joornaldetails', {
                template: require('./template.html'),
                url: '/journal/:id',
                controller: JoornalDetailsCtrl,
                controllerAs: 'ctrl',
                resolve: {
                    item: (goodsService, $stateParams) => {
                        return goodsService.getByIdJoornal($stateParams.id);
                    },

                    item_other: (goodsService, $stateParams) => {
                        return goodsService.getByIdOther($stateParams.id);
                    },

                    // newGoods: goodsService => {
                    //     return goodsService.getNewGoods();
                    // },

                    $title: ['item', function(item) {
                        return item.name;
                    }]


                }
            });
    });
