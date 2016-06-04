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
        'slick',
        'ngStorage',
        localStorage.name,
        dashboard.name
    ])
    .service('api', Api)
    .service('session', session)
    .service('auth', auth)
    .config(($locationProvider) => {
        $locationProvider.html5Mode(true);
    })
    .run(($rootScope, $state) => {
        $rootScope.$state = $state;
    })
    .run(($rootScope) => {


        /*$rootScope.$on('$stateChangeStart', () => {
            NProgress.start();
        });
        $rootScope.$on('$stateChangeSuccess', () => {
            NProgress.done();
        });*/
        $rootScope.$on('$stateChangeError', (err) => {
            console.log("Error !" + err);
        });
    });
