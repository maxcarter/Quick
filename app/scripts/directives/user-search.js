'use strict';

/**
 * @ngdoc directive
 * @name quickApp.directive:userSearch
 * @description
 * # userSearch
 */
angular.module('quickApp')
    .directive('userSearch', function() {
        var controller = ['$scope', 'Api', function($scope, Api) {
            $scope.search = function(query) {
                $scope.searching = true;
                $scope.error = false;
                $scope.noMatches = false;

                if (query !== "" && query !== undefined && query !== null) {
                    Api.users.search({
                        username__regex: "/" + query + "/i"
                    }).then(
                        function success(response) {
                            $scope.searching = false;
                            $scope.error = false;
                            $scope.noMatches = false;
                            $scope.users = response.data;

                            if ($scope.users.length === 0) {
                                $scope.noMatches = true;
                            }
                        },
                        function error(response) {
                            $scope.searching = false;
                            $scope.noMatches = false;
                            $scope.error = response;
                        });
                } else {
                	$scope.users = [];
                	$scope.searching = false;
                	$scope.noMatches = false;
                	$scope.error = false;
                }
            };
            $scope.select = function(user) {
                $scope.tsModel = user.username;
                $scope.users = [];
                $scope.query = "";
                $scope.searching = false;
                $scope.error = false;
                $scope.noMatches = false;
            };
        }];
        return {
            restrict: 'E',
            controller: controller,
            transclude: true,
            scope: {
                tsModel: '=ngModel'
            },
            templateUrl: 'templates/user-search.html',
            link: function postLink(scope, element) {
                $(document).bind('click', function(event) {
                    var isClickedElementChildOfPopup = element
                        .find(event.target)
                        .length > 0;

                    if (!isClickedElementChildOfPopup) {
                        scope.$apply(function() {
                            scope.users = [];
                            scope.query = "";
                            scope.searching = false;
                            scope.error = false;
                            scope.noMatches = false;
                        });
                    }
                });
            }
        };

    });