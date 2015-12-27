'use strict';

/**
 * @ngdoc service
 * @name quickApp.Ticket
 * @description
 * # Ticket
 * Factory in the quickApp.
 */
angular.module('quickApp')
    .factory('Ticket', function($q, $alert, $route, Request, Banner, Query, Time, config) {
        return {
            url: config.host + ":" + config.port + config.api + "/tickets",
            //TODO: Refactor these into API calls
            priorities: ["High", "Medium", "Low"],
            types: ["Task", "Issue", "Order"],
            statuses: ["Open", "In Progress", "Resolved", "Closed", "Awaiting Deployment"],
            get: function(id) {
                var deferred = $q.defer();
                var url = this.url + "/" + id;
                Request.get(url).then(
                    function success(response) {
                        deferred.resolve(response);
                    },
                    function error(response) {
                        deferred.reject(response);
                    });
                return deferred.promise;
            },
            update: function(id, data) {
                var deferred = $q.defer();
                var url = this.url + "/" + id;
                data = (data) ? data : {};
                Request.put(url, data).then(
                    function success(response) {
                        deferred.resolve(response);
                    },
                    function error(response) {
                        deferred.reject(response);
                    });
                return deferred.promise;
            },
            status: function(ticket, status) {
                var id = ticket._id;
                var data = {
                    status: (status) ? status : "Open",
                    dateUpdated: Time.now()
                };
                this.update(id, data).then(
                    function success() {
                        $route.reload();
                    }, Banner.error);
            },
            save: function(ticket) {
                var id = ticket._id;
                var data = {
                    name: (ticket.name) ? ticket.name : undefined,
                    type: (ticket.type) ? ticket.type : undefined,
                    status: (ticket.status) ? ticket.status : undefined,
                    project: (ticket.project) ? ticket.project : undefined,
                    tags: (ticket.tags) ? ticket.tags : undefined,
                    assignee: (ticket.assignee) ? ticket.assignee : undefined,
                    reporter: (ticket.reporter) ? ticket.reporter : undefined,
                    creator: (ticket.creator) ? ticket.creator : undefined,
                    body: (ticket.body) ? ticket.body : "",
                    relations: (ticket.relations) ? ticket.relations : undefined,
                    comments: (ticket.comments) ? ticket.comments: undefined,
                    dateUpdated: Time.now()
                };
                this.update(id, data).then(
                    function success() {
                        Query.param.set('mode', null);
                    }, Banner.error);
            }
        };
    });