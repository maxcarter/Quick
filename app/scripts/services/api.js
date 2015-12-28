'use strict';

/**
 * @ngdoc service
 * @name quickApp.Api
 * @description
 * # Api
 * Factory in the quickApp.
 */
angular.module('quickApp')
    .factory('Api', function($q, Request, config) {
        var host = config.host + ":" + config.port + config.api;
        return {
            tickets: {
                endpoint: "/tickets",
                get: function(id, params) {
                    var deferred = $q.defer();
                    var url = (id) ? host + this.endpoint + "/" + id : host + this.endpoint;
                    params = (params) ? params : {};
                    Request.get(url, params).then(
                        function success(response) {
                            deferred.resolve(response);
                        },
                        function error(response) {
                            deferred.reject(response);
                        });
                    return deferred.promise;
                },
                put: function(id, data) {
                    var deferred = $q.defer();
                    var url = host + this.endpoint + "/" + id;
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
                post: function(id, data, params) {
                    var deferred = $q.defer();
                    var url = host + this.endpoint;
                    data = (data) ? data : {};
                    params = (params) ? params : {};
                    Request.post(url, data, params).then(
                        function success(response) {
                            deferred.resolve(response);
                        },
                        function error(response) {
                            deferred.reject(response);
                        });
                    return deferred.promise;
                },
                delete: function(id, params) {
                    var deferred = $q.defer();
                    var url = host + this.endpoint + "/" + id;
                    params = (params) ? params : {};
                    Request.delete(url).then(
                        function success(response) {
                            deferred.resolve(response);
                        },
                        function error(response) {
                            deferred.reject(response);
                        });
                    return deferred.promise;
                }
            },
            projects: {
                endpoint: "/projects",
                get: function(id, params) {
                    var deferred = $q.defer();
                    var url = (id) ? host + this.endpoint + "/" + id : host + this.endpoint;
                    params = (params) ? params : {};
                    Request.get(url, params).then(
                        function success(response) {
                            deferred.resolve(response);
                        },
                        function error(response) {
                            deferred.reject(response);
                        });
                    return deferred.promise;
                },
                put: function(id, data) {
                    var deferred = $q.defer();
                    var url = host + this.endpoint + "/" + id;
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
                post: function(id, data, params) {
                    var deferred = $q.defer();
                    var url = host + this.endpoint;
                    data = (data) ? data : {};
                    params = (params) ? params : {};
                    Request.post(url, data, params).then(
                        function success(response) {
                            deferred.resolve(response);
                        },
                        function error(response) {
                            deferred.reject(response);
                        });
                    return deferred.promise;
                },
                delete: function(id, params) {
                    var deferred = $q.defer();
                    var url = host + this.endpoint + "/" + id;
                    params = (params) ? params : {};
                    Request.delete(url).then(
                        function success(response) {
                            deferred.resolve(response);
                        },
                        function error(response) {
                            deferred.reject(response);
                        });
                    return deferred.promise;
                }
            },
            sprints: {
                endpoint: "/sprints",
                get: function(id, params) {
                    var deferred = $q.defer();
                    var url = (id) ? host + this.endpoint + "/" + id : host + this.endpoint;
                    params = (params) ? params : {};
                    Request.get(url, params).then(
                        function success(response) {
                            deferred.resolve(response);
                        },
                        function error(response) {
                            deferred.reject(response);
                        });
                    return deferred.promise;
                },
                put: function(id, data) {
                    var deferred = $q.defer();
                    var url = host + this.endpoint + "/" + id;
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
                post: function(id, data, params) {
                    var deferred = $q.defer();
                    var url = host + this.endpoint;
                    data = (data) ? data : {};
                    params = (params) ? params : {};
                    Request.post(url, data, params).then(
                        function success(response) {
                            deferred.resolve(response);
                        },
                        function error(response) {
                            deferred.reject(response);
                        });
                    return deferred.promise;
                },
                delete: function(id, params) {
                    var deferred = $q.defer();
                    var url = host + this.endpoint + "/" + id;
                    params = (params) ? params : {};
                    Request.delete(url).then(
                        function success(response) {
                            deferred.resolve(response);
                        },
                        function error(response) {
                            deferred.reject(response);
                        });
                    return deferred.promise;
                }
            },
            users: {
                endpoint: "/users",
                authenticate: function(username, password) {
                    var deferred = $q.defer();
                    var url = host + this.endpoint + "/authenticate";
                    var data = {
                        username: username,
                        password: password
                    };
                    Request.post(url, data).then(
                        function success(response) {
                            deferred.resolve(response);
                        },
                        function error(response) {
                            deferred.reject(response);
                        });
                    return deferred.promise;
                },
                search: function(params) {
                    var deferred = $q.defer();
                    var url = host + this.endpoint;
                    params = (params) ? params : {};
                    Request.get(url, params).then(
                        function success(response) {
                            deferred.resolve(response);
                        },
                        function error(response) {
                            deferred.reject(response);
                        });
                    return deferred.promise;
                },
                get: function(id, params) {
                    var deferred = $q.defer();
                    var url = (id) ? host + this.endpoint + "/" + id : host + this.endpoint;
                    params = (params) ? params : {};
                    Request.get(url, params).then(
                        function success(response) {
                            deferred.resolve(response);
                        },
                        function error(response) {
                            deferred.reject(response);
                        });
                    return deferred.promise;
                },
                put: function(id, data) {
                    var deferred = $q.defer();
                    var url = host + this.endpoint + "/" + id;
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
                post: function(id, data, params) {
                    var deferred = $q.defer();
                    var url = host + this.endpoint;
                    data = (data) ? data : {};
                    params = (params) ? params : {};
                    Request.post(url, data, params).then(
                        function success(response) {
                            deferred.resolve(response);
                        },
                        function error(response) {
                            deferred.reject(response);
                        });
                    return deferred.promise;
                },
                delete: function(id, params) {
                    var deferred = $q.defer();
                    var url = host + this.endpoint + "/" + id;
                    params = (params) ? params : {};
                    Request.delete(url).then(
                        function success(response) {
                            deferred.resolve(response);
                        },
                        function error(response) {
                            deferred.reject(response);
                        });
                    return deferred.promise;
                }
            }
        };
    });