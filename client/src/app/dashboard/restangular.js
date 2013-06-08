//'use strict';

angular.module('carPoolingApp.restangular', ['restangular']).
  config(function(RestangularProvider) {
    RestangularProvider.setBaseUrl("/api/v1");//TODO: has to be set in node to this value - W.Mekal
    
    RestangularProvider.setRequestInterceptor(function(element, operation, route, url) {
      return element;
    });
    
    RestangularProvider.setResponseInterceptor(function(response, operation, what, url){
        return response.data;
    });
    
    RestangularProvider.addElementTransformer('accounts', false,function(elem) {
       return elem;
    });
  });