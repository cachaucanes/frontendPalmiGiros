'use strict';

describe('Component: ClientesCreateComponent', function () {

  // load the controller's module
  beforeEach(module('palmiGirosApp'));

  var ClientesCreateComponent;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($componentController) {
    ClientesCreateComponent = $componentController('clientes-create', {});
  }));

  it('should ...', function () {
    expect(1).to.equal(1);
  });
});
