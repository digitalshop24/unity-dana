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
                url: '/catalog',
                controller: CatalogCtrl,
                controllerAs: 'ctrl',
                params: {
                    page: 0,
                    perPage: 30
                },
                resolve: {
                    items: (goodsService, $stateParams) => {
                        return goodsService.get($stateParams.page, $stateParams.perPage);
                    },

                    page: $stateParams => {
                        return $stateParams.page;
                    },

                    perPage: $stateParams => {
                        return $stateParams.perPage;
                    }

                }
            });
    });