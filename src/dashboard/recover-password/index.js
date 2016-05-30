'use strict';

import angular from 'angular';
import page from './page/index.js'
import Recover from './request/index';


export default angular.module('dashboard.recover', [
    page.name
])
    .service('recover', Recover)
    .config($stateProvider => {
        $stateProvider
            .state('dashboard.recover', {
                abstract: true,
                views: {
                    '': {
                        template: '<div ui-view=""></div>'
                    }
                }
            });
    });


