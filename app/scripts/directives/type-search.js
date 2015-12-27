'use strict';

/**
 * @ngdoc directive
 * @name quickApp.directive:typeSearch
 * @description
 * # typeSearch
 */
angular.module('quickApp')
    .directive('typeSearch', function() {
    	var controller = ['$scope', function($scope) {
            
        }];
        return {
            restrict: 'E',
            controller: controller,
            transclude: true,
            scope: {
                tsName: '@',
                tsModel: '=ngModel',
                tsFnSearch: '&',
                tsFnClick: '&',
                tsFnRefresh: '&'
            },
            templateUrl: 'templates/type-search.html',
            link: function postLink(scope, element) {

            }
        };
    });