'use strict';

/**
 * @ngdoc service
 * @name quickApp.Request
 * @description
 * # Request
 * Factory in the quickApp.
 */
angular.module('quickApp')
    .factory('Request', function($http, $q, config) {
        return {
            request: function(method, url, params, data) {
                var deferred = $q.defer();
                params = (params) ? params : {};
                params.token = (config.token) ? config.token : null;
                var request = {
                    method: method,
                    url: url,
                    params: params,
                    data: data
                };
                $http(request).then(function success(response) {
                    // this callback will be called asynchronously
                    // when the response is available
                    console.log({
                        url: url,
                        success: true,
                        method: method,
                        request: request,
                        response: response
                    });
                    deferred.resolve(response);
                }, function error(response) {
                    // called asynchronously if an error occurs
                    // or server returns response with an error status.
                    console.log({
                        url: url,
                        success: false,
                        method: method,
                        request: request,
                        response: response
                    });
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