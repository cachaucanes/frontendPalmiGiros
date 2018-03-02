'use strict';

angular.module('palmiGirosApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('giros-list', {
        url: '/giros-list',
        template: '<giros-list></giros-list>'
      });
  });
