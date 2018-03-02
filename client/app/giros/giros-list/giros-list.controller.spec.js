'use strict';

describe('Component: GirosListComponent', function () {

  // load the controller's module
  beforeEach(module('palmiGirosApp'));

  var GirosListComponent;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($componentController) {
    GirosListComponent = $componentController('giros-list', {});
  }));

  it('should ...', function () {
    expect(1).to.equal(1);
  });
});
