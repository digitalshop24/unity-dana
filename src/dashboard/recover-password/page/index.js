'use strict';

import angular from 'angular';
import RecoverCtrl from './controller.js';

export default angular.module('dashboard.recover.page', [
])
    .config(function ($stateProvider) {
        $stateProvider
            .state('dashboard.recover.page', {
                template: require('./template.html'),
                url: '/password',
                controller: RecoverCtrl,
                controllerAs: 'ctrl',
                resolve: {
                }
            });
    });
