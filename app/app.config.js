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
      .state('admin', {
        url: "/admin",
        templateUrl: "partials/admin.html",
      })
      .state('admin.guests', {
        url: '/guests',
        views: {
          'adminContent' : {
            templateUrl: "partials/admin.guests.html"
          }
        }
      })
      .state('admin.messages', {
        url: '/messages',
        views: {
          'adminContent' : {
            templateUrl: "partials/admin.messages.html"
          }
        }
      });
  };

})();