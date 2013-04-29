'use strict';


// Declare app level module which depends on filters, and services
angular.module('myApp', ['myApp.filters', 'myApp.services', 'myApp.directives']).
  config(['$routeProvider', function($routeProvider) {
    $routeProvider.when('/', {templateUrl: 'partials/dashboard.html', controller: DashboardController});
    $routeProvider.when('/log-in', {templateUrl: 'partials/log-in.html', controller: AuthorizationController});
    $routeProvider.otherwise({redirectTo: '/'});
  }]);
