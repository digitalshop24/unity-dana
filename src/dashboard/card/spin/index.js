'use strict';

import angular from "angular";
import SpinCtrl from './controller.js';


export default angular.module('dashboard.card.spin', [])
    .directive('spin', function () {
        return {
            bindToController: true,
            scope: {
                item: '=',
                callback: '&'
            },
            controller: SpinCtrl,
            controllerAs: 'ctrl',
            template: require('./template.html')
        }
    });