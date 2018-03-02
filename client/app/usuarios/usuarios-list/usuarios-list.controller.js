'use strict';

(function(){

class UsuariosListComponent {
  constructor(usuariosService) {
    this.usuariosService = usuariosService;
  }

  $onInit(){
  	this.usuariosService.query().$promise
  	.then(resource => {
  		console.log(resource);
      this.usuarios = resource;
  	})
  }
}

angular.module('palmiGirosApp')
  .component('usuariosList', {
    templateUrl: 'app/usuarios/usuarios-list/usuarios-list.html',
    controller: UsuariosListComponent,
    controllerAs: 'vm'
  });

})();
