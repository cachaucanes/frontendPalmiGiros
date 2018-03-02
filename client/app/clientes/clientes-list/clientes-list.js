'use strict';

angular.module('palmiGirosApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('clientes-list', {
        url: '/clientes-list/:id',
        template: '<clientes-list></clientes-list>'
      });
  });
