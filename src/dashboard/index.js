'use strict';

import angular from 'angular';

import HeaderCtrl from './header/controller.js';
import GoodsService from './goodsService.js';
import NewsService from './newsService.js';
import Login from './login/index';
import Registration from './registration/index';
import main from './main/index.js';
import recover from './recover-password/index.js';
import details from './details/index.js';
import card from './card/index.js';
import profile from './profile/index.js';
import catalog from './catalog/index.js';
import price from './price/index.js';
import news from './news/index.js';
import monthNewGoods from './month-new/index.js';
import buyButton from './buy-button/index.js';
import bottomNavBar from './bottom-navbar/index.js';
import headerScroll from './header/scroll.js';




export default angular.module('dashboard',
    [
        main.name,
        details.name,
        card.name,
        profile.name,
        catalog.name,
        price.name,
        recover.name,
        news.name,
        bottomNavBar.name,
        headerScroll.name,
        monthNewGoods.name,
        buyButton.name
    ])
    .service('goodsService', GoodsService)
    .service('newsService', NewsService)
    .service('login', Login)
    .service('registration', Registration)
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
