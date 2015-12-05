'use strict';

/**
 * @ngdoc function
 * @name quickApp.controller:TicketCtrl
 * @description
 * # TicketCtrl
 * Controller of the quickApp
 */
angular.module('quickApp')
    .controller('TicketCtrl', function($scope, $alert, $routeParams, Request, Time, config) {
        this.awesomeThings = [
            'HTML5 Boilerplate',
            'AngularJS',
            'Karma'
        ];

        $scope.time = Time;
        $scope.id = $routeParams.id;
        $scope.url = config.host + ":" + config.port + config.api;
        Request.get($scope.url + "/tickets/" + $scope.id).then(
            function success(response) {
            	$scope._ticket = response.data;
            },
            function error(response) {
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