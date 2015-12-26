'use strict';

/**
 * @ngdoc service
 * @name quickApp.Banner
 * @description
 * # Banner
 * Factory in the quickApp.
 */
angular.module('quickApp')
    .factory('Banner', function($alert) {
        return {
            error: function(response) {
                $alert({
                    title: response.status + " " + response.statusText,
                    content: response.data,
                    placement: 'top',
                    type: 'danger',
                    show: true,
                    container: '#alert-container'
                });
            }
        };
    });