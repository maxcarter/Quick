'use strict';

describe('Service: Banner', function () {

  // load the service's module
  beforeEach(module('quickApp'));

  // instantiate service
  var Banner;
  beforeEach(inject(function (_Banner_) {
    Banner = _Banner_;
  }));

  it('should do something', function () {
    expect(!!Banner).toBe(true);
  });

});
