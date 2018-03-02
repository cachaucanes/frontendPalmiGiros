'use strict';

(function(){

class ClientesUpdateComponent {
  constructor(clientesService,ciudadesService,$stateParams,$state) {
    this.clientesService = clientesService;
    this.ciudadesService = ciudadesService;
    this.$stateParams = $stateParams;
    this.$state = $state;
  }

  $onInit(){
    this.ciudadesService.query().$promise
    .then(response => {
      this.ciudades = response;
      console.log("listado de ciudades", response);
    })
    .catch(err => console.log("ERROR"));

    //this.userService.get({id:this.$auth.getPayload().sub}).$promise
    //.getnombre cualquiera, id como me entrega el gson 
    this.clientesService.get({id:this.$stateParams.id}).$promise
    .then(response=>{
      this.clientes=response;
      console.log(this.clientes);
    });
  }


  UpdateCliente(){
    
            this.clientesService.update({id:this.$stateParams.id},this.clientes).$promise
            .then(response => {
              this.cliente = response;
              alert('Actulizado correctamente');
              console.log("Actualizacion exitosa",response);
              this.$state.go('clientes-list');
            })
            .catch(err => console.log("ERROR",err));
          }


}

angular.module('palmiGirosApp')
  .component('clientesUpdate', {
    templateUrl: 'app/clientes/clientes-update/clientes-update.html',
    controller: ClientesUpdateComponent,
    controllerAs: 'vm'
  });

})();
