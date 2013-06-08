//'use strict';

angular.module('carPoolingApp.authorization', [
])

.config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {
    $routeProvider.when('/log-in', {
        templateUrl: 'log-in.tpl.html', 
        controller: 'AuthorizationController',
        rolesAllowed: [
            CPUserEntity.prototype.ROLE_PUBLIC,
            CPUserEntity.prototype.ROLE_ANON,
            CPUserEntity.prototype.ROLE_USER_INIT,
            CPUserEntity.prototype.ROLE_USER_FULL,
            CPUserEntity.prototype.ROLE_ADMIN            
        ]
    });
}])

.controller('AuthorizationController', function AuthorizationController($rootScope, $scope, $location, CPUserSrv) {
    $scope.loginCredentials = {
        'domain': 'pgs-soft.com',
        'username': '',
        'password': ''
    };
    
    
    $scope.authenticate = function () {

        $rootScope.user = new CPUserEntity('jtokarski', CPUserEntity.prototype.ROLE_USER_FULL ); 
        
        
//        CPUserSrv.login( $scope.loginCredentials ).
//            success(function(data, status, headers, config) {
//                if ( data.status && data.status == 'success') {
//
//                    $location.path('/');
//                }
//            }).error(function(data, status, headers, config) {
//                
//            });
//        
    };
})

;