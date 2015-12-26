'use strict';

/**
 * @ngdoc function
 * @name quickApp.controller:TicketCtrl
 * @description
 * # TicketCtrl
 * Controller of the quickApp
 */
angular.module('quickApp')
    .controller('TicketCtrl', function($scope, $alert, $route, $routeParams, Request, Time, Banner, config, Ticket) {
        this.awesomeThings = [
            'HTML5 Boilerplate',
            'AngularJS',
            'Karma'
        ];

        $scope.ticketFactory = Ticket;
        $scope.time = Time;
        $scope.id = $routeParams.id;
        $scope.url = config.host + ":" + config.port + config.api;
        Request.get($scope.url + "/tickets/" + $scope.id).then(
            function success(response) {
                $scope._ticket = response.data;
            }, Banner.error);

    });