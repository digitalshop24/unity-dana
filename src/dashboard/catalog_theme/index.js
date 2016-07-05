'use strict';

import angular from 'angular';
import CatalogThemeCtrl from './controller.js';
import CatalogThemeService from './service.js';

export default angular.module('dashboard.catalog_theme', [])
    .service('catalogThemeService', CatalogThemeService)
    .config(function ($stateProvider) {
        $stateProvider
            .state('dashboard.catalog_theme', {
                template: require('./template.html'),
                url: '/catalog?theme=',
                controller: CatalogThemeCtrl,
                controllerAs: 'ctrl',
                params: {
                    page: 1,
                    perPage: 30,
                    sort: 'price',
                    desc: false
                },
                resolve: {
                    items: (goodsService, $stateParams) => {
                        return goodsService.getTheme($stateParams.page, $stateParams.perPage, $stateParams.sort, $stateParams.desc, $stateParams.theme);
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

                    theme: $stateParams => {
                        return $stateParams.theme;
                    },

                    desc: $stateParams => {
                        return $stateParams.desc;
                    }
                }
            });
    });