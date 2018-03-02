'use strict';

describe('Component: GirosCreateComponent', function () {

  // load the controller's module
  beforeEach(module('palmiGirosApp'));

  var GirosCreateComponent;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($componentController) {
    GirosCreateComponent = $componentController('giros-create', {});
  }));

  it('should ...', function () {
    expect(1).to.equal(1);
  });
});
