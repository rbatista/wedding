(function () {
  'use strict';

  angular
    .module('weddingApp')
    .controller('GuestsAdminController', guestsAdminController);

    guestsAdminController.$inject = ['$http'];

    function guestsAdminController($http) {
      var API_URL = '/api/v1/guests';
      var vm = this;

      vm.guests = [];
      getConfirmedGuests();

      function getConfirmedGuests() {
        $http.get(API_URL).then(listSucess, listError);
      }

      function listSucess(response) {
        vm.guests = response.data;
      }

      function listError(response) {
        vm.guests = [];
      }

    };

})();