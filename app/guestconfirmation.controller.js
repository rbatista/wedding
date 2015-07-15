(function () {
  'use strict';

  angular
    .module('weddingApp')
    .controller('GuestConfirmationController', guestConfirmationController);

  guestConfirmationController.$inject = ['$http'];

  function guestConfirmationController($http) {
    var API_URL = '/api/v1/guests';
    var vm = this;

    vm.showAlert = false;
    vm.sucessAlert = false;
    vm.messageAlert = "";

    vm.confirm = confirm;
    vm.disableAlert = disableAlert;

    function confirm(confirmed) {
      var guest = {
        name: vm.name,
        email: vm.email,
        phone: vm.phone,
        confirmed: confirmed
      }

      if (!valid(guest)) {
        console.log("Invalid request: " + JSON.stringify(guest));
        return;
      }

      console.log(JSON.stringify(guest));

      $http.post(API_URL, guest)
        .success(confirmationSucess)
        .error(confirmationError);
    }

    function confirmationSucess(data, status, headers, config) {
      console.log('sucess: ' + JSON.stringify(data));

      vm.sucessAlert = true;
      vm.messageAlert = "Obrigado " + getFirstName(vm.name) + ", sua presença foi confirmada.";
      vm.showAlert = true;

      cleanFields();
    }

    function confirmationError(data, status, headers, config) {
      console.log('error: ' + data);

      vm.sucessAlert = false;
      vm.messageAlert = "Não foi possível confirmar sua presença, por favor, tente novamente mais tarde.";
      vm.showAlert = true;
    }

    function disableAlert() {
      vm.showAlert = false;
    }

    function valid(guest) {
      return guest.name && guest.phone;
    }

    function getFirstName(fullName) {
      if (fullName) {
        var index = fullName.indexOf(' ');
        return index == -1 ? fullName: fullName.substr(0, index);
      }

      return "";
    }

    function cleanFields() {
      vm.name = "";
      vm.email = "";
      vm.phone = "";
    }

  }

})();
