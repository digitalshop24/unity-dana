'use strict';

import angular from 'angular';
import JournalsCtrl from './controller.js';
import JournalsService from './service.js';

export default angular.module('dashboard.journals', [])
    .service('journalsService', JournalsService)
    .config(function ($stateProvider) {
        $stateProvider
            .state('dashboard.journals', {
                template: require('./template.html'),
                url: '/journals',
                controller: JournalsCtrl,
                controllerAs: 'ctrl',
                params: {
                    page: 1,
                    perPage: 30,
                    sort: 'price',
                    desc: false
                },
                resolve: {
                    items: (goodsService, $stateParams) => {
                        return goodsService.getJournals();
                    },

                    $title: () => { return 'Журналы'; },
                }
            });
    });