'use strict';

angular.module('palmiGirosApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('clientes-create', {
        url: '/clientes-create',
        template: '<clientes-create></clientes-create>'
      });
  });
