(function () {
  'use strict';

  angular
    .module('weddingApp')
    .directive('focusOn', function() {
      return function(scope, elem, attr) {
         scope.$on('focusOn', function(e, name) {
           if(name === attr.focusOn) {
             elem[0].focus();
           }
         });
      };
  });
});