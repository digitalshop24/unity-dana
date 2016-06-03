'use strict';

import angular from 'angular';
import CardCtrl from './controller.js';
import CardService from './service.js';

export default angular.module('dashboard.card', [
])
    .service('cardService', CardService)
    .config(function ($stateProvider) {
        $stateProvider
            .state('dashboard.card', {
                template: require('./template.html'),
                url: '/card',
                controller: CardCtrl,
                controllerAs: 'ctrl',
                resolve: {
                }
            });
    });
