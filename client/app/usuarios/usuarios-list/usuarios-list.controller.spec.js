'use strict';

describe('Component: UsuariosListComponent', function () {

  // load the controller's module
  beforeEach(module('palmiGirosApp'));

  var UsuariosListComponent;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($componentController) {
    UsuariosListComponent = $componentController('usuarios-list', {});
  }));

  it('should ...', function () {
    expect(1).to.equal(1);
  });
});
