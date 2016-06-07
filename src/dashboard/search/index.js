'use strict';

import angular from 'angular';
import SearchCtrl from './controller.js';

export default angular.module('dashboard.search', [
])
    .config(function ($stateProvider) {
        $stateProvider
            .state('dashboard.search', {
                template: require('./template.html'),
                url: '/search?q=',
                controller: SearchCtrl,
                controllerAs: 'ctrl',
                resolve: {
                    items: (goodsService, $stateParams) => {
                        return goodsService.search($stateParams.q);
                    }
                }
            });
    });
