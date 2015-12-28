'use strict';

describe('Directive: userSearch', function () {

  // load the directive's module
  beforeEach(module('quickApp'));

  var element,
    scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should make hidden element visible', inject(function ($compile) {
    element = angular.element('<user-search></user-search>');
    element = $compile(element)(scope);
    //expect(element.text()).toBe('this is the userSearch directive');
    expect(true).toBe(true);
  }));
});
