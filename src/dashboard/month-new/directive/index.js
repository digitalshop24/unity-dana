'use strict';

import angular from "angular";
import MonthGoodsCtrl from './controller.js';

export default angular.module('dashboard.month-new.directive', [])
    .directive('monthNewGoods', function () {
        return {
            bindToController: true,
            restrict: 'EA',
            scope: {
                monthNewGoods: '='
            },
            template: require('./template.html'),
            controller: MonthGoodsCtrl,
            controllerAs: 'ctrl'
        }
    });
