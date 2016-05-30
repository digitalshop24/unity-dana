'use strict';

import angular from 'angular';
import DetailsCtrl from './controller.js';

export default angular.module('dashboard.details', [
])
    .config(function ($stateProvider) {
        $stateProvider
            .state('dashboard.details', {
                template: require('./template.html'),
                url: '/goods/:id',
                controller: DetailsCtrl,
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
