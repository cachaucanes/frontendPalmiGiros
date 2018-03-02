'use strict';

class NavbarController {
   constructor(AuthService){
    //start-non-standard
    this.menu = [{
      'title': 'Home',
      'state': 'main'
    }];

    this.isCollapsed = true;
    //end-non-standard
   this.AuthService=AuthService;

console.log("rol",this.AuthService.isAdmin());
  }


}

angular.module('palmiGirosApp')
  .controller('NavbarController', NavbarController);
