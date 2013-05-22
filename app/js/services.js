'use strict';

/* Services */


// Demonstrate how to register services
// In this case it is a simple value service.
angular.module('carPoolingApp.services', []).
  value('version', '0.1').
  factory('CPUser', function($http) {
      return new function() {};
  });
