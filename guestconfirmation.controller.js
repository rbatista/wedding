(function () {
  'use strict';

  angular
    .module('weddingApp')
    .controller('GuestConfirmationController', guestConfirmationController);

  guestConfirmationController.$inject = ['$http'];

  function guestConfirmationController($http) {
    var BASE_API_URL = '/api/v1/';
    var vm = this;

    vm.confirm = confirm;

    function confirm(confirmed) {
      var guest = {
        name: vm.name,
        email: vm.email,
        phone: vm.phone,
        confirmed: confirmed
      }

      console.log(JSON.stringify(guest));

      $http.post(BASE_API_URL + 'guests', guest)
        .success(confirmationSucess)
        .error(confirmationError);
    }

    function confirmationSucess(data, status, headers, config) {
      console.log('sucess: ' + JSON.stringify(data));
    }

    function confirmationError(data, status, headers, config) {
      console.log('error: ' + data);
    }

  }

})();
