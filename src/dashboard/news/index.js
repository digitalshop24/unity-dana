'use strict';

import angular from 'angular';
import NewsCtrl from './controller.js';

export default angular.module('dashboard.news', [])
    .config(function ($stateProvider) {
        $stateProvider
            .state('dashboard.news', {
                template: require('./template.html'),
                url: '/news',
                controller: NewsCtrl,
                controllerAs: 'ctrl',
                params: {
                    page: 1,
                    perPage: 5
                },
                resolve: {
                    news: (newsService,$stateParams) => {
                        return newsService.get($stateParams.page, $stateParams.perPage);
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
