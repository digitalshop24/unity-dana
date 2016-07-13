'use strict';

import angular from 'angular';

import HeaderCtrl from './header/controller.js';
import GoodsService from './goodsService.js';
import NewsService from './newsService.js';
import UsersService from './usersService.js';
import Login from './login/index';
import Registration from './registration/index';
import main from './main/index.js';
import recover from './recover-password/index.js';
import details from './details/index.js';
import card from './card/index.js';
import profile from './profile/index.js';
import catalog from './catalog/index.js';
import contacts from './contacts/index.js';
import price from './price/index.js';
import news from './news/index.js';
import post from './post/index.js';
import search from './search/index.js';
import categories from './categories/index.js';
import monthNewGoods from './month-new/index.js';
import buyButton from './buy-button/index.js';
import bottomNavBar from './bottom-navbar/index.js';
import headerScroll from './header/scroll.js';
import Modal from './modal/index';
import thx from './thx/index';
import catalog_theme from './catalog_theme/index.js';
import catalog_status from './catalog_status/index.js';
import update from './update/index';



export default angular.module('dashboard',
    [
        main.name,
        details.name,
        card.name,
        profile.name,
        catalog.name,
        catalog_theme.name,
        price.name,
        recover.name,
        news.name,
        search.name,
        contacts.name,
        bottomNavBar.name,
        headerScroll.name,
        monthNewGoods.name,
        categories.name,
        post.name,
        buyButton.name,
        thx.name,
        catalog_status.name,
        update.name
    ])
    .service('goodsService', GoodsService)
    .service('newsService', NewsService)
    .service('usersService', UsersService)
    .service('login', Login)
    .service('registration', Registration)
    .service('modal', Modal)
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
