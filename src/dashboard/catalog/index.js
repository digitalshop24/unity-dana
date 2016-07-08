'use strict';

import angular from 'angular';
import CatalogCtrl from './controller.js';
import CatalogService from './service.js';

export default angular.module('dashboard.catalog', [])
    .service('catalogService', CatalogService)
    .config(function ($stateProvider) {
        $stateProvider
            .state('dashboard.catalog', {
                template: require('./template.html'),
                url: '/catalog?category=',
                controller: CatalogCtrl,
                controllerAs: 'ctrl',
                params: {
                    page: 1,
                    perPage: 30,
                    sort: 'price',
                    desc: false
                },
                resolve: {
                    items: (goodsService, $stateParams) => {
                        return goodsService.get($stateParams.page, $stateParams.perPage, $stateParams.sort, $stateParams.desc, $stateParams.category);
                    },

                    page: $stateParams => {
                        return $stateParams.page;
                    },

                    perPage: $stateParams => {
                        return $stateParams.perPage;
                    },

                    sort: $stateParams => {
                        return $stateParams.sort;
                    },

                    category: $stateParams => {
                        return $stateParams.category;
                    },

                    desc: $stateParams => {
                        return $stateParams.desc;
                    }
                }
            });
    });