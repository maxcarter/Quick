'use strict';

describe('Controller: TicketCtrl', function () {

  // load the controller's module
  beforeEach(module('quickApp'));

  var TicketCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    TicketCtrl = $controller('TicketCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(TicketCtrl.awesomeThings.length).toBe(3);
  });
});
