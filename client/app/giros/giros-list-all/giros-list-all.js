'use strict';

angular.module('palmiGirosApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('giros-list-all', {
        url: '/giros-list-all',
        template: '<giros-list-all></giros-list-all>'
      });
  });
