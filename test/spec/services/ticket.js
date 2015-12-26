'use strict';

describe('Service: Ticket', function () {

  // load the service's module
  beforeEach(module('quickApp'));

  // instantiate service
  var Ticket;
  beforeEach(inject(function (_Ticket_) {
    Ticket = _Ticket_;
  }));

  it('should do something', function () {
    expect(!!Ticket).toBe(true);
  });

});
