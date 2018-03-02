'use strict';

(function () {

  class GirosListComponent {
    constructor(girosService, clientesService) {
      this.girosService = girosService;
      this.clientesService = clientesService;
      this.giros = {
        idClienteReceptor: {
          id: null
        }
      }
    }

    $onInit() {

      //Para que no liste todos los giros al cargar la pagina
      // this.girosService.query().$promise
      //   .then(response=>{
      //     console.log("Giros", response);
      //     this.giros = response;

      //   })
      //   .catch(err => {
      //     console.log("ERROR", err);
      //   })
    }

    buscarGirosPendientes(){
      this.clientesService.obtenerClientesIdentificacion({documento:this.documentoClienteGiroReceptor}).$promise
        .then(response=>{
          this.clientes = response;
          console.log("Cliente de giro receptor", response);

          this.girosService.obtenerGirosPorIdentificacionCliente({idClienteReceptor:this.clientes.id}).$promise
          .then(response=>{
            this.giros = response;
            console.log("giros", response);
          })
        })
    }

  }

  angular.module('palmiGirosApp')
    .component('girosList', {
      templateUrl: 'app/giros/giros-list/giros-list.html',
      controller: GirosListComponent,
      controllerAs: 'vm'
    });

})();
