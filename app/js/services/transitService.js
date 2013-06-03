'use strict';

angular.module('carPoolingApp.transitService', ['restangular']).
    factory('TransitService', function(Restangular, $q) {
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
         
            this.getList = function(dateTimeFrom, dateTimeTo){
                //TODO: call to backend W.Mekal
                
                return transits;
            };

            this.onChange = function(dateTimeFrom, dateTimeTo){
                var defered = $q.defer();
                
                //TODO: call backend - W.Mekal
                setTimeout(function() {
                    transits[0].at = new Date().toLocaleTimeString();
                    defered.resolve([transits[0]]);
                }, 5000);//TODO: it would be nice to call it many times - or publish some event - W.Mekal
                
                return defered.promise;
            };
      };
  });
