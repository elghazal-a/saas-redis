'use strict';

angular.module('saasApp', [
  'ngResource',
  'ngRoute'
])
  .config(function ($routeProvider, $locationProvider) {
    $routeProvider
      .when('/new', {
        templateUrl: 'app/new/new.html',
        controller: 'NewCtrl'
      })
      .when('/list', {
        templateUrl: 'app/list/list.html',
        controller: 'ListCtrl'
      })
      .otherwise({
        redirectTo: '/new'
      });

    $locationProvider.html5Mode(true);
  });