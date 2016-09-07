'use strict';

import angular from 'angular';
import CatalogStatusCtrl from './controller.js';
import CatalogStatusService from './service.js';

export default angular.module('dashboard.status', [])
    .service('catalogStatusService', CatalogStatusService)
    .config(function ($stateProvider) {
        $stateProvider
            .state('dashboard.status', {
                template: require('./template.html'),
                url: '/catalog_books_print',
                controller: CatalogStatusCtrl,
                controllerAs: 'ctrl',
                params: {
                    page: 1,
                    perPage: 30,
                    sort: 'price',
                    desc: false
                },
                resolve: {
                    items: (goodsService, $stateParams) => {
                        return goodsService.get($stateParams.page, $stateParams.perPage, $stateParams.sort, $stateParams.desc);
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

                    theme: $stateParams => {
                        return $stateParams.theme;
                    },

                    desc: $stateParams => {
                        return $stateParams.desc;
                    },

                    $title: () => { return 'Каталог'; },
                }
            });
    });