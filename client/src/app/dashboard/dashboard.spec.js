/**
 * Tests sit right alongside the file they are testing, which is more intuitive
 * and portable than separating `src` and `test` directories. Additionally, the
 * build process will exclude all `.spec.js` files from the build
 * automatically.
 */
describe( 'dashboard section', function() {
    var scope;
    var ctrl;
    
    beforeEach( module( 'carPoolingApp.dashboard' ) );

    beforeEach(inject(function($rootScope, $controller, TransitService, $timeout) {
        scope = $rootScope.$new();
        ctrl = $controller('DashboardController', {$scope: scope, TransitService: TransitService, $timeout: $timeout});
    }));

    it('should create "transits" model with more than 0 items', function() {
        expect(scope.transits.length).toBeGreaterThan(0);
    });
});