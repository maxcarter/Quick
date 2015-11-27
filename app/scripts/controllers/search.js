'use strict';

/**
 * @ngdoc function
 * @name quickApp.controller:SearchCtrl
 * @description
 * # SearchCtrl
 * Controller of the quickApp
 */
angular.module('quickApp')
    .controller('SearchCtrl', function($scope, $alert, $routeParams, Request, config) {
        this.awesomeThings = [
            'HTML5 Boilerplate',
            'AngularJS',
            'Karma'
        ];

        $scope.request = Request;
        $scope.config = config;
        $scope.url = config.host + ":" + config.port + config.api;
        $scope.type = $routeParams.type;

        $scope.request.get($scope.url + "/" + $scope.type).then(
            function(response) {
                switch ($scope.type) {
                    case "tasks":
                        $scope.tasks = response.data;
                        break;
                    case "sprints":
                        $scope.sprints = response.data;
                        break;
                }
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