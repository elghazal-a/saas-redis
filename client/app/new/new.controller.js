'use strict';

angular.module('saasApp')
  .controller('NewCtrl', function ($scope, $http) {

  	$scope.spawnInstance = function(instance){
	    $http.post('/api/instance/new', {
	    	name: instance.name
	    })
	    .success(function(instance) {
	    	console.log("Success");
	      	$scope.instance = instance;
	    	alert("The redis instance has been created. IP: " + instance.ip + " Port: " + instance.port);
	    });
  	}

  });
