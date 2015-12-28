'use strict';

/**
 * @ngdoc function
 * @name quickApp.controller:NavCtrl
 * @description
 * # NavCtrl
 * Controller of the quickApp
 */
angular.module('quickApp')
    .controller('NavCtrl', function($scope, $location, $cookies, $rootScope, Request, Login, Api, config) {
        this.awesomeThings = [
            'HTML5 Boilerplate',
            'AngularJS',
            'Karma'
        ];
        $scope.config = config;
        $scope.login = Login;
        $scope.url = config.host + ":" + config.port + config.api;
        $scope.path = $location.path();

        $scope.getUser = function(username) {
            var params = {
                username: username,
                limit: 1
            };
            Request.get($scope.url + "/users", params).then(
                function success(response) {
                    $scope.displayName = response.data[0].displayName;
                },
                function error(response) {
                    console.log(response);
                    $location.url("/login");
                });
        };

        $scope.activeTickets = function(username) {
            var params = {
                assignee: username,
                status: "In Progress",
                limit: 5
            };
            Api.tickets.search(params).then(
                function success(response) {
                    $scope.activeTickets = response.data;
                },
                function error() {
                    $scope.activeTickets = [];
                });
        };

        $rootScope.$on("login-done", function() {
            $scope.getUser(config.username, config.token);
        });

        $rootScope.$on('$routeChangeStart', function() {
            if ($scope.path !== "/login") {
                if (!Login.checkToken()) {
                    $location.path('/login');
                } else {
                    $scope.getUser(config.username);
                    $scope.activeTickets(config.username);
                }
            }
        });
    });