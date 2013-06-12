angular.module( 'carPoolingApp', [
  'app-templates',
  'component-templates',
  'titleService',
  'carPoolingApp.dashboard',
  'carPoolingApp.authorization'
])

.config( function myAppConfig ( $routeProvider, $locationProvider ) {
//    $locationProvider.html5Mode(true);//FIXME: commented out temporarily - W.Mekal
  $routeProvider.otherwise({ redirectTo: '/' });
})

.run( function run ( titleService ) {
  titleService.setSuffix( ' | car pooling' );
})

.run(['$rootScope', '$location', function($rootScope, $location) {
    $rootScope.user = new CPUserEntity();

    $rootScope.$on('$routeChangeStart', function(event, next, current) {
        if ( _.indexOf(next.rolesAllowed, $rootScope.user.role) === -1 ) {
//                $location.path( $rootScope.user.getDefaultRoute() );//FIXME: commented out temporarily - W.Mekal
        }
    });
}])

.controller( 'AppCtrl', function AppCtrl ( $scope, $location ) {
})

;