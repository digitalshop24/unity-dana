'use strict';

import angular from "angular";
import MonthNewCtrl from './controller.js';
import directive from './directive/index.js'

export default angular.module('dashboard.month-new', [
    directive.name
])
    .config(function ($stateProvider) {
        $stateProvider
            .state('dashboard.month-new', {
                template: require('./template.html'),
                url: '/month-new',
                controller: MonthNewCtrl,
                controllerAs: 'ctrl',
                resolve: {
                    newGoods: goodsService => {
                        return goodsService.getNewGoods();
                    }
                }
            });
    });