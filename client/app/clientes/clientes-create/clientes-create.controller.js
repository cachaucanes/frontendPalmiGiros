'use strict';

(function () {

  class ClientesCreateComponent {
    constructor(ciudadesService,clientesService) {
      this.ciudadesService = ciudadesService;
      this.clientesService = clientesService;
    }

    $onInit() {
      this.ciudadesService.query().$promise
        .then(response => {
          this.ciudades = response;
          console.log("listado de ciudades", response);
        })
        .catch(err => console.log("ERROR"));

    }

    createCliente(){
  console.log(this.clientes);
  this.clientesService.save(this.clientes).$promise
  .then(response =>{
    console.log("cliente guardado correctamente");
    this.message = "se ha registrado correctamente";
    alert("se ha registrado correctamente");
  })
  .catch(err => console.error(err));
}


  }

  angular.module('palmiGirosApp')
    .component('clientesCreate', {
      templateUrl: 'app/clientes/clientes-create/clientes-create.html',
      controller: ClientesCreateComponent,
      controllerAs: 'vm'
    });

})();
