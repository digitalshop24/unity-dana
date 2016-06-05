'use strict';

import angular from 'angular';
import CardCtrl from './controller.js';
import CardService from './service.js';
import CardStorage from './storage.js';

export default angular.module('dashboard.card', [
])
    .service('cardService', CardService)
    .service('cardStorage', CardStorage)
    .config(function ($stateProvider) {
        $stateProvider
            .state('dashboard.card', {
                template: require('./template.html'),
                url: '/card',
                controller: CardCtrl,
                controllerAs: 'ctrl',
                resolve: {
                    goods: (cardService, cardStorage) => {
                        const ids = cardStorage.goods.map(item => item.id);
                        if(ids.length) {
                            return cardService.getInfo(ids.join(","));
                        }
                        return [];
                    }
                }
            });
    });
