'use strict';

function DashboardController($scope, TransitService) {
    var from = '';
    var to = '';
    
    $scope.transits = TransitService.getList(from, to);
    
    TransitService//TODO: maybe it will be subscribed as event - W.Mekal
        .onChange(from, to)
        .then(function(changedTransits){
            //TODO: update and highlight changed transits
        });
}
DashboardController.$inject = ['$scope', 'TransitService'];