(function () {
  'use strict';

  angular
    .module('weddingApp')
    .config(configure);

  function configure($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise("/");

    $stateProvider
      .state('index', {
        url: "/",
        templateUrl: "partials/index.html"
      })
      ;
  };

})();