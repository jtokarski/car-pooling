'use strict';

/* jasmine specs for controllers go here */

describe('DashboardController', function(){
   var scope;
   var ctrl;
 
    beforeEach(inject(function($rootScope, $controller) {
        scope = $rootScope.$new();
        ctrl = $controller(DashboardController, {$scope: scope});
    }));

    it('should create "transits" model with more than 0 items', function() {
        expect(scope.transits.length).toBeGreaterThan(0);
    });
});

