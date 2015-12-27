'use strict';

describe('Directive: stopPropagation', function () {

  // load the directive's module
  beforeEach(module('quickApp'));

  var element,
    scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should make hidden element visible', inject(function ($compile) {
    element = angular.element('<stop-propagation></stop-propagation>');
    element = $compile(element)(scope);
    expect(element.text()).toBe('this is the stopPropagation directive');
  }));
});
