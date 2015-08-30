(function () {
  'use strict';

  angular
    .module('weddingApp')
    .controller('AdminController', adminController);

    adminController.$inject = ['$http'];

    function adminController() {
      var vm = this;
    };

})();