'use strict';

import angular from "angular";
import MonthGoodsCtrl from './controller.js';

export default angular.module('dashboard.header.scroll', [])
    .directive('headerScroll', function () {
        return {
            restrict: 'EA',
            link: function () {
                angular.element(document).ready(function () {
                    $(window).bind('scroll', function () {
                        const $allNav = $('.allNav');
                        if ($(window).scrollTop() == 0) {
                            $('.halfNav').addClass('vv');
                            $allNav.removeClass('vv');
                            $('.navbar-brand img').css("width", "77%");
                            $allNav.css("margin-top", "30px");
                            $('.cartScroll').css("display", "none");
                            $allNav.css("top", "0");

                        } else {
                            $allNav.css("margin-top", "0px");
                            $allNav.css("top", "0");
                            $('.navbar-brand img').css("width", "72%");
                            $allNav.addClass('vv');
                            $('.halfNav').removeClass('vv');
                            $('.cartScroll').css("display", "block");
                        }
                    });
                });
            }
        }
    });