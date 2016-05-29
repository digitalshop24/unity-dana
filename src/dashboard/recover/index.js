'use strict';

import extend from 'extend';
import LoginCtrl from './controller.js';

export default class Recover {
    constructor($modal, $rootScope) {
        this.modal = $modal;
        this.rootscope = $rootScope;
        this.default = {
            animation: true,
            controller: LoginCtrl,
            controllerAs: 'ctrl',
            template: require('./template.html'),
            windowClass: 'authorizationModal text-center'
        };
    }

    open(options) {
        options = extend(this.default, options);
        const modalInstance = this.modal.open(options);
    }
}