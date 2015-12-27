'use strict';

/**
 * @ngdoc function
 * @name quickApp.controller:TicketCtrl
 * @description
 * # TicketCtrl
 * Controller of the quickApp
 */
angular.module('quickApp')
    .controller('TicketCtrl', function($scope, $routeParams, Time, Banner, Ticket, Query) {
        this.awesomeThings = [
            'HTML5 Boilerplate',
            'AngularJS',
            'Karma'
        ];

        $scope.ticketFactory = Ticket;
        $scope.time = Time;
        $scope.id = $routeParams.id;
        $scope.query = Query;
        $scope.mode = Query.param.get("mode");

        Ticket.get($scope.id).then(
            function success(response) {
                $scope._ticket = response.data;
                $scope.editedTicket = angular.copy(response.data);
            }, Banner.error);
    });