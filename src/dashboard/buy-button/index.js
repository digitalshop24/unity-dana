'use strict';

import angular from "angular";
import BuyButtonCtrl from './controller.js';

export default angular.module('dashboard.buy-button', [])
    .directive('buyButton', function () {
        return {
            bindToController: true,
            restrict: 'EA',
            scope: {
                item: '='
            },
            template: require('./template.html'),
            controller: BuyButtonCtrl,
            controllerAs: 'ctrl'
        }
    });