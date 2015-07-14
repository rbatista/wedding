(function () {
  'use strict';

  angular
    .module('weddingApp')
    .controller('MessageController', messageController);

    function messageController() {
      var vm = this;

      vm.messages = [
        { name: 'Raphael Negrisoli', date: '2015-07-09T03:38:50.000Z', message: 'Olá pessoas!' },
        { name: 'Raphael Negrisoli', date: '2015-07-09T03:38:50.000Z', message: 'Olá pessoas!' },
        { name: 'Raphael Negrisoli', date: '2015-07-09T03:38:50.000Z', message: 'Olá pessoas!' },
        { name: 'Raphael Negrisoli', date: '2015-07-09T03:38:50.000Z', message: 'Olá pessoas!' },
        { name: 'Raphael Negrisoli', date: '2015-07-09T03:38:50.000Z', message: 'Olá pessoas!' },
        { name: 'Raphael Negrisoli', date: '2015-07-09T03:38:50.000Z', message: 'Olá pessoas!' },
        { name: 'Raphael Negrisoli', date: '2015-07-09T03:38:50.000Z', message: 'Olá pessoas!' },
        { name: 'Raphael Negrisoli', date: '2015-07-09T03:38:50.000Z', message: 'Olá pessoas!' },
        { name: 'Mairis', date: '2015-07-09T03:38:50.000Z', message: 'Olá pessoas!' }
      ];
    };

})();