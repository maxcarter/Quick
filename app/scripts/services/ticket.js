'use strict';

/**
 * @ngdoc service
 * @name quickApp.Ticket
 * @description
 * # Ticket
 * Factory in the quickApp.
 */
angular.module('quickApp')
    .factory('Ticket', function($q, $alert, $route, Request, Banner, config) {
        return {
            url: config.host + ":" + config.port + config.api + "/tickets",
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
                var data = (data) ? data : {};
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
                    status: (status) ? status : "Open"
                };
                this.update(id, data).then(
                    function success(response) {
                        $route.reload();
                    }, Banner.error);
            }
        };
    });