'use strict';

(function(){

class GirosCreateComponent {
  constructor(ciudadesService,clientesService,girosService,$state, $stateParams) {
    this.ciudadesService = ciudadesService;
    this.clientesService = clientesService;
    this.girosService = girosService;
    this.$state = $state;
    this.$stateParams = $stateParams;
    this.message = 'Hello';
    this.giros = {
      idClienteEmisor:{
        id : null
      },
      idClienteReceptor:{
        id:null
      }
    };

  }
   $onInit(){

						this.ciudadesService.query().$promise
						.then(response => {
							this.ciudad = response;
							console.log("listado de ciudades",this.ciudad);
						})
            .catch(err => console.log("ERROR"));
            
            this.clientesService.query().$promise
						.then(response => {
							this.clientes = response;
							console.log("listado de cliente",this.clientes);
						})
            .catch(err => console.log("ERROR"));
}

buscarClienteEmisor(){
  this.clientesService.obtenerClientesIdentificacion({documento:this.documentoClienteEmisor}).$promise
  .then(response =>{
    this.ClienteEmisor = response;
    this.giros.idClienteEmisor.id = this.ClienteEmisor.id;
    console.log("Cliente Emisor", response);
  })
}


buscarClienteReceptor(){
  this.clientesService.obtenerClientesIdentificacion({documento:this.documentoClienteReceptor}).$promise
  .then(response =>{
    this.ClienteReceptor = response;
    this.giros.idClienteReceptor.id = this.ClienteReceptor.id;
    console.log("Cliente Receptor", response);
  })
}

registrarGiro(){
  console.log(this.giros);
  this.girosService.save(this.giros).$promise
  .then(response =>{
    console.log("Giro guardado correctamente");
    this.message = "se ha registrado correctamente";
    alert("Giro registrado correctamente");
  })
  .catch(err => console.error(err));
}

selectedCiudad(item){
  this.selectedCiudades = item;
}
}

angular.module('palmiGirosApp')
  .component('girosCreate', {
    templateUrl: 'app/giros/giros-create/giros-create.html',
    controller: GirosCreateComponent,
    controllerAs: 'vm'
  });

})();



