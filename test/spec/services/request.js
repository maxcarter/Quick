'use strict';

describe('Service: Request', function () {

  // load the service's module
  beforeEach(module('quickApp'));

  // instantiate service
  var Request;
  beforeEach(inject(function (_Request_) {
    Request = _Request_;
  }));

  it('should do something', function () {
    expect(!!Request).toBe(true);
  });

});
