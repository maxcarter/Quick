'use strict';

/**
 * @ngdoc function
 * @name quickApp.controller:SearchCtrl
 * @description
 * # SearchCtrl
 * Controller of the quickApp
 */
angular.module('quickApp')
    .controller('SearchCtrl', function($scope, $alert, $routeParams, $location, Request, config) {
        this.awesomeThings = [
            'HTML5 Boilerplate',
            'AngularJS',
            'Karma'
        ];

        $scope.jump = function(position, size, direction) {
            var spot;
            switch (direction) {
                case "fwd":
                    spot = position + size - 1;
                    $location.search("startAt", spot + 1);
                    $location.search("skip", spot);
                    break;
                case "bkwd":
                    spot = position - size;
                    if (spot >= 0) {
                        $location.search("startAt", spot);
                        $location.search("skip", spot - 1);
                    } else {
                        $location.search("startAt", null);
                        $location.search("skip", null);
                    }
                    break;
            }
        };

        $scope.request = Request;
        $scope.config = config;
        $scope.url = config.host + ":" + config.port + config.api;
        $scope.type = $routeParams.type;

        $scope.queryParams = $location.search();
        $scope.startAt = ($scope.queryParams.startAt) ? parseInt($scope.queryParams.startAt) : 1;
        $scope.params = {
            limit: ($scope.queryParams.limit) ? parseInt($scope.queryParams.limit) : 25,
            skip: ($scope.queryParams.skip) ? parseInt($scope.queryParams.skip) : 0,
            sort: ($scope.queryParams.sort) ? $scope.queryParams.sort : "dateCreated",
        };
        if ($scope.startAt) {
            $scope.params.skip = $scope.startAt - 1;
        }
        $scope.request.get($scope.url + "/" + $scope.type, $scope.params).then(
            function(response) {
                switch ($scope.type) {
                    case "tickets":
                        $scope.tickets = response.data;
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