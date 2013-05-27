'use strict';

/* Services */


// Demonstrate how to register services
// In this case it is a simple value service.
angular.module('carPoolingApp.services', []).
  value('version', '0.1').
  factory('CPUserSrv', function($http) {
      return new function() {
          this.login = function( loginCredentials ) {
              if ( !loginCredentials.domain || !loginCredentials.username || !loginCredentials.password  )
                  return false;
              
              return $http({
                  url: '/login',
                  method: 'POST',
                  data: loginCredentials
              });

          };
          
          this.logout = function() {
              
          };
          
      };
  });
