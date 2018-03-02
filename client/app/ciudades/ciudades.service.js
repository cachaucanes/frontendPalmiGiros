'use strict';

ciudadesService.inject = ["$resource", "API"];
function ciudadesService($resource, API) {
  return $resource(API + "/api/ciudades/:id", {
    id: '@id'
  }, {
      method: {
        update: 'PUT'
      }
    })
}

angular.module('palmiGirosApp')
  .factory('ciudadesService', ciudadesService);
