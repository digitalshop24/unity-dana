'use strict';

import angular from 'angular';
import UpdateCtrl from './controller.js';
import UpdateService from './service.js';

export default angular.module('dashboard.update', [
])
    .service('priceService', UpdateService)
    .config(function ($stateProvider) {
        $stateProvider
            .state('dashboard.update', {
                template: require('./template.html'),
                url: '/update',
                controller: UpdateCtrl,
                controllerAs: 'ctrl',
                resolve: {
                }
            });
    });
