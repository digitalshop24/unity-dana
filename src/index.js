'use strict';

import angular from 'angular';

import Api from './api';
import session from './auth/session';
import auth from './auth/auth';
import localStorage from './auth/localstorage/index';
import dashboard from './dashboard/index';



export default angular.module('app',
    [
        'ui.router',
        'ui.bootstrap',
        'ngCookies',
        'ngSanitize',
        'angularMoment',
        'slick',
        'ngStorage',
        'infinite-scroll',
        'yaMap',
        'ng',
        'ui.router.title',
        'vAccordion',
        'ngAnimate',
        localStorage.name,
        dashboard.name
    ])
    .service('api', Api)
    .service('session', session)
    .service('auth', auth)
    .config(($locationProvider) => {
        $locationProvider.html5Mode(true);
        NProgress.configure({trickleRate: 0.1, trickleSpeed: 200, showSpinner: false});
    })
    .run(($rootScope, $state) => {
        $rootScope.$state = $state;
    })
    .run(($rootScope) => {

        $rootScope.$on('$stateChangeStart', () => {
            window.scrollTo(0, 0);
        });

        $rootScope.$on('$stateChangeStart', () => {
            NProgress.start();
        });
        $rootScope.$on('$stateChangeSuccess', () => {
            NProgress.done();
        });
        $rootScope.$on('$stateChangeError', () => {
            NProgress.done();
            console.log("Error !" + err);
        });
    });
