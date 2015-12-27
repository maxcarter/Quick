'use strict';

/**
 * @ngdoc service
 * @name quickApp.Ticket
 * @description
 * # Ticket
 * Factory in the quickApp.
 */
angular.module('quickApp')
    .factory('Ticket', function($q, $route, Banner, Query, Time, Api) {
        return {
            //TODO: Refactor these into API calls
            priorities: ["High", "Medium", "Low"],
            types: ["Task", "Issue", "Order"],
            statuses: ["Open", "In Progress", "Resolved", "Closed", "Awaiting Deployment"],
            status: function(ticket, status) {
                var id = ticket._id;
                var data = {
                    status: (status) ? status : "Open",
                    dateUpdated: Time.now()
                };
                Api.tickets.put(id, data).then(
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
                Api.tickets.put(id, data).then(
                    function success() {
                        Query.param.set('mode', null);
                    }, Banner.error);
            }
        };
    });