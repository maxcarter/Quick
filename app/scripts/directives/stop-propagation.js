'use strict';

/**
 * @ngdoc directive
 * @name quickApp.directive:stopPropagation
 * @description
 * # stopPropagation
 */
angular.module('quickApp')
    .directive('stopPropagation', function() {
        return {
            restrict: 'A',
            link: function postLink(scope, element, attrs) {
                element.bind(attrs.stopPropagation, function(event) {
                    event.stopPropagation();
                });
            }
        };
    });