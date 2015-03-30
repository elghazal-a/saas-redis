'use strict';

angular.module('saasApp')
  .controller('NavbarCtrl', function ($scope, $location) {
    $scope.menu = [{
      'title': 'Spawn a new instance',
      'link': '/new'
    
    }, 
    {
      'title': 'Show instances',
      'link': '/list'
    }];


    $scope.isActive = function(route) {
      return route === $location.path();
    };
  });