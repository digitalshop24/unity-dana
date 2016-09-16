'use strict';

import angular from 'angular';
import CatalogTextbookCtrl from './controller.js';
import CatalogTextbookService from './service.js';

export default angular.module('dashboard.textbook', [])
    .service('catalogTextbookService', CatalogTextbookService)
    .config(function ($stateProvider) {
        $stateProvider
            .state('dashboard.textbook', {
                template: require('./template.html'),
                url: '/catalog_textbook?textbook=',
                controller: CatalogTextbookCtrl,
                controllerAs: 'ctrl',
                params: {
                    page: 1,
                    perPage: 30,
                    sort: 'alphabet',
                    desc: false
                },
                resolve: {
                    items: (goodsService, $stateParams) => {
                        return goodsService.getTextbook($stateParams.page, $stateParams.perPage, $stateParams.sort, $stateParams.desc, true);
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

                    desc: $stateParams => {
                        return $stateParams.desc;
                    },

                    $title: () => { return 'Каталог'; },
                }
            });
    });