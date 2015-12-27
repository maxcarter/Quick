'use strict';

/**
 * @ngdoc service
 * @name quickApp.Time
 * @description
 * # Time
 * Factory in the quickApp.
 */
angular.module('quickApp')
    .factory('Time', function() {
        return {
        	now: function(){
        		return new Date();
        	},
            parse: function(date, format) {
                format = (format) ? format : "YYYY-MM-DD";
                return moment(date).format(format);
            }
        };
    });