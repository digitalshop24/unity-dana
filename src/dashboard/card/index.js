'use strict';

import angular from 'angular';
import GoodsCtrl from './controller.js';

export default angular.module('dashboard.card', [
])
    .config(function ($stateProvider) {
        $stateProvider
            .state('dashboard.card', {
                template: require('./template.html'),
                url: '/goods/:id',
                controller: GoodsCtrl,
                controllerAs: 'ctrl',
                resolve: {
                    item: (goodsService, $stateParams) => {
                        return goodsService.getById($stateParams.id);
                    },

                    newGoods: goodsService => {
                        return goodsService.getNewGoods();
                    }
                }
            });
    });
