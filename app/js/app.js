'use strict';


// Declare app level module which depends on filters, and services
angular.module('carPoolingApp', ['carPoolingApp.filters', 'carPoolingApp.services', 'carPoolingApp.directives']).
  config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {
    $locationProvider.html5Mode(true);
    $routeProvider.when('/', {
        templateUrl: 'partials/dashboard.html', 
        controller: DashboardController,
        rolesAllowed: [
            CPUserEntity.prototype.ROLE_USER_INIT,
            CPUserEntity.prototype.ROLE_USER_FULL,
            CPUserEntity.prototype.ROLE_ADMIN
        ],});
    $routeProvider.when('/log-in', {
        templateUrl: 'partials/log-in.html', 
        controller: AuthorizationController,
        rolesAllowed: [
            CPUserEntity.prototype.ROLE_PUBLIC,
            CPUserEntity.prototype.ROLE_ANON,
            CPUserEntity.prototype.ROLE_USER_INIT,
            CPUserEntity.prototype.ROLE_USER_FULL,
            CPUserEntity.prototype.ROLE_ADMIN            
        ],});
    $routeProvider.otherwise({redirectTo: '/'});
  }]).
    run(['$rootScope', '$location', function($rootScope, $location) {
        $rootScope.user = new CPUserEntity();
    
        $rootScope.$on('$routeChangeStart', function(event, next, current) {
            if ( _.indexOf(next.rolesAllowed, $rootScope.user.role) == -1 ) {
                $location.path( $rootScope.user.getDefaultRoute() );
            }
        });
    
    }]);
