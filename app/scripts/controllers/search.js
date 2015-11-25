'use strict';

/**
 * @ngdoc function
 * @name quickApp.controller:SearchCtrl
 * @description
 * # SearchCtrl
 * Controller of the quickApp
 */
angular.module('quickApp')
    .controller('SearchCtrl', function($scope, $alert, Request, config) {
        this.awesomeThings = [
            'HTML5 Boilerplate',
            'AngularJS',
            'Karma'
        ];

        $scope.request = Request;
        $scope.config = config;
        $scope.url = config.host + ":" + config.port + config.api;

        $scope.request.get($scope.url + "/tasks").then(
            function(response) {
                $scope.tasks = response.data;
            },
            function(response) {
                $alert({
                    title: response.status + " " + response.statusText,
                    content: response.data,
                    placement: 'top',
                    type: 'danger',
                    show: true,
                    container: '#alert-container'
                });
            });

    });