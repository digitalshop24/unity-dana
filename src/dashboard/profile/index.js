'use strict';

import angular from 'angular';
import ProfileCtrl from './controller.js';

export default angular.module('dashboard.profile', [
])
    .config(function ($stateProvider) {
        $stateProvider
            .state('dashboard.profile', {
                template: require('./template.html'),
                url: '/profile',
                controller: ProfileCtrl,
                controllerAs: 'ctrl',
                resolve: {
                    historyGoods: goodsService => {
                        return goodsService.getHistoryGoods();
                    },
                     $title: () => { return 'Личный кабинет'; },
                }
            });
    });
