'use strict';

/**
 * @ngdoc function
 * @name quickApp.controller:LoginCtrl
 * @description
 * # LoginCtrl
 * Controller of the quickApp
 */
angular.module('quickApp')
    .controller('LoginCtrl', function($scope, $alert, $location, $cookies, $rootScope, Request, config) {
        this.awesomeThings = [
            'HTML5 Boilerplate',
            'AngularJS',
            'Karma'
        ];

        $scope.url = config.host + ":" + config.port + config.api;
        $scope.authenticate = function(username, password) {
            if (username === null || username === "" || username === undefined) {
                $alert({
                    title: "Validation Error",
                    content: "Username is a required field!",
                    placement: 'top',
                    type: 'danger',
                    show: true,
                    container: '#alert-container'
                });
                return;
            }
            if (password === null || password === "" || password === undefined) {
                $alert({
                    title: "Validation Error",
                    content: "Password is a required field!",
                    placement: 'top',
                    type: 'danger',
                    show: true,
                    container: '#alert-container'
                });
                return;
            }
            var data = {
                username: username,
                password: password
            };
            Request.post($scope.url + "/users/authenticate", data).then(
                function success(response) {
                    config.username = username;
                    config.token = response.data.token;
                    $cookies.putObject('quickApp', {
                        username: username,
                        token: response.data.token
                    });
                    $rootScope.$broadcast("login-done");
                    $location.url("/dashboard");
                },
                function error(response) {
                    $alert({
                        title: response.status + " " + response.statusText,
                        content: response.data.message,
                        placement: 'top',
                        type: 'danger',
                        show: true,
                        container: '#alert-container'
                    });
                });
        };
    });