'use strict';

/**
 * @ngdoc service
 * @name quickApp.config
 * @description
 * # config
 * Constant in the quickApp.
 */
angular.module('quickApp')
    .constant('config', {
        host: "http://localhost",
        port: 3000,
        api: "/api/v1"
    });