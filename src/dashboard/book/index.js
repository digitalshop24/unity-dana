'use strict';

import angular from 'angular';
import CatalogBookCtrl from './controller.js';
import CatalogBookService from './service.js';

export default angular.module('dashboard.book', [])
    .service('catalogBookService', CatalogBookService)
    .config(function ($stateProvider) {
        $stateProvider
            .state('dashboard.book', {
                template: require('./template.html'),
                url: '/catalog_uniti_book?book=',
                controller: CatalogBookCtrl,
                controllerAs: 'ctrl',
                params: {
                    page: 1,
                    perPage: 30,
                    sort: 'price',
                    desc: false
                },
                resolve: {
                    items: (goodsService, $stateParams) => {
                        return goodsService.getUnitiBook($stateParams.page, $stateParams.perPage, $stateParams.sort, $stateParams.desc, $stateParams.book);
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

                    book: $stateParams => {
                        return $stateParams.book;
                    },

                    desc: $stateParams => {
                        return $stateParams.desc;
                    },

                    $title: () => { return 'Каталог'; },
                }
            });
    });