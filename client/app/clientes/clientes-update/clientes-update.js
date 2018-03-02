'use strict';

angular.module('palmiGirosApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('clientes-update', {
        url: '/clientes-update/:id',
        template: '<clientes-update></clientes-update>'
      });
  });
