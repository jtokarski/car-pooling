'use strict';

angular.module('carPoolingApp.transitService', ['restangular']).
    factory('TransitService', function(Restangular, $q, $rootScope) {
        return new function() {
            var templateTransit = {
                type: 'offer',
                from: 'Maczka',
                to:   'Rejtana',
                at: '16:07',
                driver: 'JTokarski',
                spacesLeft: '3'
            };
            var templateTransitRequest = {
                type: 'request',
                from: 'Maczka',
                to:   'Rejtana',
                at: '16:07',
                requestor: 'JTokarski',
                spacesNeeded: '3'
            };
            var transits = [
                templateTransit,templateTransit,templateTransit,templateTransit,templateTransit,
                templateTransitRequest,templateTransitRequest,templateTransitRequest
            ];
            
            for(var index in transits){
                transits[index].id = index;
            }
         
            this.getList = function(dateTimeFrom, dateTimeTo){
                //TODO: call to backend W.Mekal
                
                return transits;
            };

            this.pollForChanges = function(dateTimeFrom, dateTimeTo){
                //TODO: call backend - W.Mekal
                
                var deferred = $q.defer();
                                
                setTimeout(function() {
                    transits[0].at = new Date().toLocaleTimeString();
                    deferred.resolve([transits[0]]);
                    $rootScope.$digest();
                }, 2000);//TODO: it would be nice to call it many times - or publish some event - W.Mekal
                
                return deferred.promise;
            };
      };
  });
