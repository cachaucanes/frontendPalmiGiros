'use strict';

function girosService($resource,API){
    return $resource(API +"/api/giros/:id",{
        id: '@id'
    },{
        update:{
            method: 'PUT'
        },

        obtenerGirosPorIdentificacionCliente:{
            url:API+'/api/giros/findGiro',
            method: 'GET',
            isArray:true
        }
    })
}

angular.module('palmiGirosApp')
    .factory('girosService', girosService);