'use strict';

import angular from 'angular';

import HeaderCtrl from './header/controller.js';
import main from './main/index.js'



export default angular.module('dashboard',
    [
        main.name
    ])
    /*.service('login', Login)
    .service('modal', Modal)
    .service('modalSpeed', ModalSpeed)
    .service('notificationService', NotificationService)*/
    .config($stateProvider => {
        $stateProvider
            .state('dashboard', {
                abstract: true,
                views: {
                    '': {
                        template: require('./template.html')
                    },
                    'dashboard-header@dashboard': {
                        template: require('./header/template.html'),
                        controller: HeaderCtrl,
                        controllerAs: 'ctrl'
                    },
                    'dashboard-footer@dashboard': {
                        template: require('./footer/template.html')
                    }
                }
            });
    });
