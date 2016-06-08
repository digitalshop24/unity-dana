'use strict';

import angular from 'angular';
import PostCtrl from './controller.js';

export default angular.module('dashboard.post', [])
    .config(function ($stateProvider) {
        $stateProvider
            .state('dashboard.post', {
                template: require('./template.html'),
                url: '/posts/:url',
                controller: PostCtrl,
                controllerAs: 'ctrl',
                params: {
                    page: 1,
                    perPage: 1,
                    category: undefined
                },
                resolve: {
                    post: (newsService,$stateParams) => {
                        return newsService.get($stateParams.page, $stateParams.perPage, $stateParams.category, $stateParams.url);
                    }
                }
            });
    });
