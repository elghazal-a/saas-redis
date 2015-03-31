'use strict';

angular.module('saasApp')
  .controller('ListCtrl', function ($scope, $http) {

    $http.get('/api/instance/list').success(function(instances) {
      	$scope.instances = instances;
      	console.log($scope.instances);
    });

  });
