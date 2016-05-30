'use strict';

import angular from 'angular';

import HeaderCtrl from './header/controller.js';
import GoodsService from './goodsService.js';
import Login from './login/index';
import Registration from './registration/index';
import Recover from './recover/index';
import main from './main/index.js';
import card from './details/index.js';
import profile from './profile/index.js';
import catalog from './catalog/index.js';
import price from './price/index.js';
import monthNewGoods from './month-new/index.js';




export default angular.module('dashboard',
    [
        main.name,
        card.name,
        profile.name,
        catalog.name,
        price.name,
        monthNewGoods.name
    ])
    .service('goodsService', GoodsService)
    .service('login', Login)
    .service('registration', Registration)
    .service('recover', Recover)
    /*
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
