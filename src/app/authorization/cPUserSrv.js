//'use strict';

angular.module('carPoolingApp.CPUserSrv', []).
  factory('CPUserSrv', function($http) {
      return function() {
          this.login = function( loginCredentials ) {
              if ( !loginCredentials.domain || !loginCredentials.username || !loginCredentials.password  ){
                  return false;
              }
              
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
