'use strict';

import angular from "angular";

export default angular.module('dashboard.bottom-navbar', [])
    .directive('bottomNavBar', function () {
        return {
            bindToController: true,
            restrict: 'EA',
            template: require('./template.html'),
            controllerAs: 'ctrl'
        }
    });