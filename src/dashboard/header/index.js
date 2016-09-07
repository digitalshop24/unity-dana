'use strict';

import angular from 'angular';
import CategoriesCtrl from './controller.js';
import CategoriesService from './service.js';

export default angular.module('dashboard.categories', [
])
    .service('categoriesService', CategoriesService)
    .config(function ($stateProvider) {
        $stateProvider
            .state('dashboard.header', {
                template: require('./template.html'),
                url: '/categories',
                controller: CategoriesCtrl,
                controllerAs: 'ctrl',
                resolve: {
                    categories: categoriesService => {
                        return categoriesService.getCategories();
                    },

                    newGoods: goodsService => {
                        return goodsService.getNewGoods();
                    }
                }
            });
    });
