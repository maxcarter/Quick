'use strict';

/**
 * @ngdoc service
 * @name quickApp.Query
 * @description
 * # Query
 * Factory in the quickApp.
 */
angular.module('quickApp')
    .factory('Query', function($location) {
        return {
            jump: function(position, size, direction) {
                var spot;
                switch (direction) {
                    case "fwd":
                        spot = position + size - 1;
                        $location.search("startAt", spot + 1);
                        $location.search("skip", spot);
                        break;
                    case "bkwd":
                        spot = position - size;
                        if (spot >= 0) {
                            $location.search("startAt", spot);
                            $location.search("skip", spot - 1);
                        } else {
                            $location.search("startAt", null);
                            $location.search("skip", null);
                        }
                        break;
                }
            },
            param: {
                set: function(key, value) {
                    if (value !== "") {
                        $location.search(key, value);
                    } else {
                        $location.search(key, null);
                    }
                },
                get: function(key, type, defaultValue) {
                    var params = $location.search();
                    var value;
                    if (params[key]) {
                        switch (type) {
                            case "Number":
                                value = parseInt(params[key]);
                                break;
                            default:

                                value = params[key];
                                break;
                        }
                    }
                    if (defaultValue !== undefined && value === undefined) {
                        value = defaultValue;
                    }
                    return value;
                }
            }
        };
    });