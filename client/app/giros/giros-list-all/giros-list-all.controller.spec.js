'use strict';

describe('Component: GirosListAllComponent', function () {

  // load the controller's module
  beforeEach(module('palmiGirosApp'));

  var GirosListAllComponent;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($componentController) {
    GirosListAllComponent = $componentController('giros-list-all', {});
  }));

  it('should ...', function () {
    expect(1).to.equal(1);
  });
});
