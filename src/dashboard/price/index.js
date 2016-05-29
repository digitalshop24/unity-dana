'use strict';

import angular from 'angular';
import PriceCtrl from './controller.js';

export default angular.module('dashboard.price', [
])
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
                    }
                }
            });
    });
