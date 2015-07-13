(function () {
  'use strict';

  angular
    .module('weddingApp')
    .factory('focus', focus);

  focus.$inject = ['$rootScope', '$timeout'];

  function focus($rootScope, $timeout) {
    var factory = function doFocus(name) {
      $timeout( function broadcast() {
        $rootScope.$broadcast('focusOn', name);
      });
    }

    return service;
  }

});