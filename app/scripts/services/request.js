'use strict';

/**
 * @ngdoc service
 * @name quickApp.Request
 * @description
 * # Request
 * Factory in the quickApp.
 */
angular.module('quickApp')
    .factory('Request', function($http, $q) {
        return {
            request: function(method, url, params, data) {
                var deferred = $q.defer();
                $http({
                    method: method,
                    url: url,
                    params: params,
                    data: data
                }).then(function successCallback(response) {
                    // this callback will be called asynchronously
                    // when the response is available
                    deferred.resolve(response);
                }, function errorCallback(response) {
                    // called asynchronously if an error occurs
                    // or server returns response with an error status.
                    deferred.reject(response);
                });
                return deferred.promise;
            },
            get: function(url, params) {
                return this.request("GET", url, params);
            },
            put: function(url, data, params) {
                return this.request("PUT", url, params, data);
            },
            post: function(url, data, params) {
                return this.request("POST", url, params, data);
            },
            delete: function(url, params) {
                return this.request("DELETE", url, params);
            }
        };
    });