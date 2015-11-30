'use strict';

/**
 * @ngdoc function
 * @name quickApp.controller:DashboardCtrl
 * @description
 * # DashboardCtrl
 * Controller of the quickApp
 */
angular.module('quickApp')
    .controller('DashboardCtrl', function($scope, config) {
        this.awesomeThings = [
            'HTML5 Boilerplate',
            'AngularJS',
            'Karma'
        ];

        $scope.config = config;
    });