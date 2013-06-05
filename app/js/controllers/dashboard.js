'use strict';

function DashboardController($scope, TransitService, $timeout) {
    var pollingPromise = null;
    var from = '';
    var to = '';
    
    $scope.indexOf = function(arr, predicateCallback){
        for(var index in arr){
            if( predicateCallback(arr[index]) === true){
                return index;
            }
            
            return null;
        }
    };
    
    $scope.updateChangedTransits = function(changedTransits){
        angular.forEach(changedTransits, function(index, changedTransit){
            var index = $scope.indexOf($scope.transits, function(t){
                return t.id === changedTransit.id;
            });
            if( index === null ){
                return;
            }
            
            $scope.transits[0] = changedTransit;
        });
    };
    
    $scope.transits = TransitService.getList(from, to);
    
    $scope.pollChanges = function(){
         TransitService//TODO: maybe it will be subscribed as event - W.Mekal
            .pollForChanges(from, to)
            .then(function(changedTransits){
                //TODO: highlight changed transits?
                $scope.updateChangedTransits(changedTransits);
                
                pollingPromise = $timeout($scope.pollChanges, 100);
            });
    };
    $scope.pollChanges();
        
    $scope.$on('$destroy', function() {
        $timeout.cancel(pollingPromise);
    });
}
DashboardController.$inject = ['$scope', 'TransitService', '$timeout'];