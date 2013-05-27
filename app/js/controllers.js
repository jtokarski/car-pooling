'use strict';

var templateTransit = {
    from: 'Maczka',
    to:   'Rejtana',
    at: '16:07',
    driver: 'JTokarski',
    spacesLeft: '3'
 };
 var templateTransitRequest = {
    from: 'Maczka',
    to:   'Rejtana',
    at: '16:07',
    requestor: 'JTokarski',
    spacesNeeded: '3'
 };

function DashboardController($scope) {
    $scope.transits = [];
    $scope.transitRequests = [];
    
    $scope.transits.push(templateTransit);
    $scope.transits.push(templateTransit);
    $scope.transits.push(templateTransit);
    $scope.transits.push(templateTransit);
    $scope.transits.push(templateTransit);
    $scope.transits.push(templateTransit);
    
    $scope.transitRequests.push(templateTransitRequest);
    $scope.transitRequests.push(templateTransitRequest);
    $scope.transitRequests.push(templateTransitRequest);
    
}
DashboardController.$inject = ['$scope'];

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