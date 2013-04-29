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

function AuthorizationController($scope) {
}
AuthorizationController.$inject = ['$scope'];