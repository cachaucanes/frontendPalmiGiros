'use strict';

(function () {

  class GirosListAllComponent {
    constructor(girosService) {
      this.girosService = girosService;
    }

    $onInit() {
      /*this.girosService.query().$promise
        .then(response => {
          console.log("Giros", response);
          this.giros = response;

        })
        .catch(err => {
          console.log("ERROR", err);
        })*/

      this.girosService.query().$promise
        .then(response => {
          console.log("Giros", response);
          this.giros = response;

        })
        .catch(err => {
          console.log("ERROR", err);
        })

    }
  }

  angular.module('palmiGirosApp')
    .component('girosListAll', {
      templateUrl: 'app/giros/giros-list-all/giros-list-all.html',
      controller: GirosListAllComponent,
      controllerAs: 'vm'
    });

})();
