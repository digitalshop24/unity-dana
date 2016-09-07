'use strict';

import angular from 'angular';
import ContactsCtrl from './controller.js';
import ContactsService from './service.js';

export default angular.module('dashboard.contacts', [])
    .service('contactsService', ContactsService)
    .config(function ($stateProvider) {
        $stateProvider
            .state('dashboard.contacts', {
                template: require('./template.html'),
                url: '/contacts',
                controller: ContactsCtrl,
                controllerAs: 'ctrl',
                resolve: {
                    $title: () => { return 'Контакты'; },
                }
            });
    });