'use strict';

describe('Service: Time', function () {

  // load the service's module
  beforeEach(module('quickApp'));

  // instantiate service
  var Time;
  beforeEach(inject(function (_Time_) {
    Time = _Time_;
  }));

  it('should do something', function () {
    expect(!!Time).toBe(true);
  });

});
