(function () {
  'use strict';

  angular
    .module('weddingApp')
    .controller('MessageController', messageController);

    messageController.$inject = ['$http'];

    function messageController($http) {
      var API_URL = '/api/v1/messages';
      var vm = this;

      vm.messages = [];
      vm.showAlert = false;
      vm.messageAlert = '';
      vm.disableAlert = disableAlert;
      vm.sendMessage = sendMessage;
      vm.cancel = cancel;

      loadMessages();

      function loadMessages() {
        $http.get(API_URL)
          .success(populateMessages)
          .error(handleErrorOnLoadMessages);
      }

      function populateMessages(data, status, headers, config) {
        console.log('loaded messages: ' + JSON.stringify(data));
        vm.messages = data.reverse();
      }

      function handleErrorOnLoadMessages(data, status, headers, config) {
        console.log('error on load messages: ' + data + ', st=' + status);
        vm.messages = [];
      }

      function sendMessage() {
        var message = {
          name: vm.name,
          email: vm.email,
          message: vm.message
        }

        if (!valid(message)) {
          console.log("Invalid message request: " + JSON.stringify(message));
          return;
        }

        console.log("Creating a new message: " + JSON.stringify(message));

        $http.post(API_URL, message)
          .success(sendMessageSucess)
          .error(sendMessageError);
      }

      function valid(message) {
        return message.name && message.message;
      }

      function sendMessageSucess(data, status, headers, config) {
        vm.sucessAlert = true;
        vm.messageAlert = "Obrigado " + getFirstName(vm.name) + ", pela sua mensagem.";
        vm.showAlert = true;

        cleanFields();
        loadMessages();
      }

      function getFirstName(fullName) {
        if (fullName) {
          var index = fullName.indexOf(' ');
          return index == -1 ? fullName: fullName.substr(0, index);
        }

        return "";
      }

      function cleanFields() {
        vm.name = '';
        vm.email = '';
        vm.message = '';
      }

      function sendMessageError(data, status, headers, config) {
        console.log('error on send messages: ' + data + ', st=' + status);

        vm.sucessAlert = false;
        vm.messageAlert = "Não foi possível enviar sua mensagem, por favor, tente novamente mais tarde.";
        vm.showAlert = true;
      }

      function disableAlert() {
        vm.showAlert = false;
      }

      function cancel() {
        cleanFields();
      }

    };

})();