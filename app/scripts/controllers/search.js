'use strict';

/**
 * @ngdoc function
 * @name quickApp.controller:SearchCtrl
 * @description
 * # SearchCtrl
 * Controller of the quickApp
 */
angular.module('quickApp')
    .controller('SearchCtrl', function($scope, $alert, $routeParams, $location, Request, Time, Query, config) {
        this.awesomeThings = [
            'HTML5 Boilerplate',
            'AngularJS',
            'Karma'
        ];

        $scope.request = Request;
        $scope.time = Time;
        $scope.query = Query;
        $scope.config = config;
        $scope.url = config.host + ":" + config.port + config.api;
        $scope.type = $routeParams.type;

        $scope.startAt = Query.param.get("startAt", "Number", 1);
        $scope.queryString = Query.param.get("name");
        $scope.params = {
            limit: Query.param.get("limit", "Number", 25),
            skip: $scope.startAt - 1,
            sort: Query.param.get("sort", "String", "dateCreated"),
            name__regex: (Query.param.get("name")) ? "/" + Query.param.get("name")+ "/i" : null,
        };
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