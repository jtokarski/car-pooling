'use strict';


// Declare app level module which depends on filters, and services
angular.module('carPoolingApp', ['carPoolingApp.filters', 'carPoolingApp.services', 'carPoolingApp.directives']).
  config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {
    $locationProvider.html5Mode(true);
    $routeProvider.when('/', {templateUrl: 'partials/dashboard.html', controller: DashboardController});
    $routeProvider.when('/log-in', {templateUrl: 'partials/log-in.html', controller: AuthorizationController});
    $routeProvider.otherwise({redirectTo: '/'});
  }]);
