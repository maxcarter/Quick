'use strict';

/**
 * @ngdoc service
 * @name quickApp.Login
 * @description
 * # Login
 * Factory in the quickApp.
 */
angular.module('quickApp')
    .factory('Login', function($location, $rootScope, $alert, $cookies, Request, config) {
        return {
            url: config.host + ":" + config.port + config.api,
            authenticate: function(username, password) {
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
                Request.post(this.url + "/users/authenticate", data).then(
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
            },
            checkToken: function() {
                var token = false;
                if (config.username && config.token) {
                    token = true;
                } else {
                    var stored = $cookies.getObject('quickApp');
                    if (stored) {
                        if (stored.username && stored.token) {
                            config.username = stored.username;
                            config.token = stored.token;
                            token = true;
                        }
                    }
                }
                return token;
            }
        };
    });