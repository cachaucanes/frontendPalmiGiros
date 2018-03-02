'use strict';

function clientesService($resource,API){
    return $resource(API +"/api/clientes/:id",{
        id: '@id'
    },{
        update:{
            method: 'PUT'
        },
        obtenerClientesIdentificacion:{
            url:API+'/api/clientes/find',
            method: 'GET'
            
        }
    })
}

angular.module('palmiGirosApp')
    .factory('clientesService', clientesService);