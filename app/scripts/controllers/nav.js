'use strict';

/**
 * @ngdoc function
 * @name quickApp.controller:NavCtrl
 * @description
 * # NavCtrl
 * Controller of the quickApp
 */
angular.module('quickApp')
    .controller('NavCtrl', function($scope, $location, $cookies, $rootScope, Request, Login, config) {
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

        $rootScope.$on("login-done", function() {
            $scope.getUser(config.username, config.token);
        });

        if ($scope.path !== "/login") {
        	var token = Login.checkToken();
        	if(token) {
        		$scope.getUser(config.username, config.token);
        	} else {
        		$location.url("/login");
        	}
        }
    });