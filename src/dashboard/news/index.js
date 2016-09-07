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
                    perPage: 5,
                    category: 'news'
                },
                resolve: {
                    news: (newsService,$stateParams) => {
                        return newsService.get($stateParams.page, $stateParams.perPage, $stateParams.category);
                    },

                    page: $stateParams => {
                        return $stateParams.page;
                    },

                    perPage: $stateParams => {
                        return $stateParams.perPage;
                    },

                    category: $stateParams => {
                        return $stateParams.category;
                    },
                    
                    $title: ['news', function(news) {
                        return news.name;
                    }]
                }
            });
    });
