'use strict';

describe('Component: ClientesUpdateComponent', function () {

  // load the controller's module
  beforeEach(module('palmiGirosApp'));

  var ClientesUpdateComponent;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($componentController) {
    ClientesUpdateComponent = $componentController('clientes-update', {});
  }));

  it('should ...', function () {
    expect(1).to.equal(1);
  });
});
