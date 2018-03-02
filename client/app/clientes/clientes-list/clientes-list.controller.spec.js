'use strict';

describe('Component: ClientesListComponent', function () {

  // load the controller's module
  beforeEach(module('palmiGirosApp'));

  var ClientesListComponent;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($componentController) {
    ClientesListComponent = $componentController('clientes-list', {});
  }));

  it('should ...', function () {
    expect(1).to.equal(1);
  });
});
