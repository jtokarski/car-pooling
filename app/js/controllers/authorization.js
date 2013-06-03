'use strict';

function AuthorizationController( $rootScope, $scope, $location, CPUserSrv) {
    
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
    }
    
}
AuthorizationController.$inject = ['$rootScope','$scope','$location','CPUserSrv'];