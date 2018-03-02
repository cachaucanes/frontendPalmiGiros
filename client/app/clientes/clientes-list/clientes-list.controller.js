'use strict';

(function(){

class ClientesListComponent {
  constructor(clientesService) {
    this.clientesService = clientesService;
    this.message = 'Hello';
  }

  $onInit(){
  	this.clientesService.query().$promise
  	.then(resource => {
  		console.log(resource);
      this.clientes = resource;
  	})
  }
}

angular.module('palmiGirosApp')
  .component('clientesList', {
    templateUrl: 'app/clientes/clientes-list/clientes-list.html',
    controller: ClientesListComponent,
    controllerAs: 'vm'
  });

})();
