'use strict';

import angular from 'angular';
import PriceCtrl from './controller.js';
import PriceService from './service.js';

export default angular.module('dashboard.price', [
])
    .service('priceService', PriceService)
    .config(function ($stateProvider) {
        $stateProvider
            .state('dashboard.price', {
                template: require('./template.html'),
                url: '/price',
                controller: PriceCtrl,
                controllerAs: 'ctrl',
                resolve: {
                    newGoods: goodsService => {
                        return goodsService.getNewGoods();
                    },

                    price: priceService => {
                        return priceService.getPrice();
                    }
                }
            });
    });
