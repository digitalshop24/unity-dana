'use strict';

import angular from 'angular';
import ThxCtrl from './controller.js';
import ThxService from './service.js';

export default angular.module('dashboard.thx', [
])
    .service('thxService', ThxService)
    .config(function ($stateProvider) {
        $stateProvider
            .state('dashboard.thx', {
                template: require('./template.html'),
                url: '/thx',
                controller: ThxCtrl,
                controllerAs: 'ctrl',
                resolve: {
                    historyGoods: goodsService => {
                        return goodsService.getHistoryGoods();
                    },

                    requisits: (cardService) => {
                        return cardService.getRequisits();
                    },

                    $title: () => { return 'Спасибо!'; },
                }
            });
    });
