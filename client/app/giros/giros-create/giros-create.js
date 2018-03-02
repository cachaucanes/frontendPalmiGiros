'use strict';

angular.module('palmiGirosApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('giros-create', {
        url: '/giros-create',
        template: '<giros-create></giros-create>'
      });
  });
