'use strict';

/**
 * @ngdoc function
 * @name quickApp.controller:LoginCtrl
 * @description
 * # LoginCtrl
 * Controller of the quickApp
 */
angular.module('quickApp')
    .controller('LoginCtrl', function($scope, $alert, $location, Login, config) {
        this.awesomeThings = [
            'HTML5 Boilerplate',
            'AngularJS',
            'Karma'
        ];
        $scope.loginService = Login;
        if (Login.checkToken()) {
            $location.path('/dashboard');
        }
    });