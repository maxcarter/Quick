'use strict';

/**
 * @ngdoc function
 * @name quickApp.controller:NavCtrl
 * @description
 * # NavCtrl
 * Controller of the quickApp
 */
angular.module('quickApp')
    .controller('NavCtrl', function($scope, $location, $cookies, $rootScope, Request, config) {
        this.awesomeThings = [
            'HTML5 Boilerplate',
            'AngularJS',
            'Karma'
        ];
        $scope.config = config;
        $scope.url = config.host + ":" + config.port + config.api;
        $scope.path = $location.path();

        $scope.getUser = function(username, token) {
            var params = {
                username: username,
                token: token,
                limit: 1
            };
            Request.get($scope.url + "/users", params).then(
                function success(response) {
                    $scope.username = response.data[0].username;
                },
                function error(response) {
                    $location.url("/login");
                });
        };

        $rootScope.$on("login-done", function() {
            $scope.getUser(config.username, config.token);
        });

        if ($scope.path !== "/login") {
            if (config.username && config.token) {
                $scope.getUser(config.username, config.token);
            } else {
                var stored = $cookies.getObject('quickApp');
                if (stored) {
                    if (stored.username && stored.token) {
                        config.username = stored.username;
                        config.token = stored.token;
                        $scope.getUser(stored.username, stored.token);
                    } else {
                        $location.url("/login");
                    }
                } else {
                    $location.url("/login");
                }
            }
        }
    });