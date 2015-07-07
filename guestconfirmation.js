(function () {
	'use strict';

	angular
		.module('weddingApp')
		.controller('GuestConfirmationController', guestConfirmationController); 

	function guestConfirmationController() {
		var vm = this;

		vm.confirm = confirm;
		vm.maybe = maybe;
		vm.reject = reject;

		function confirm(guest) {
			guest.presence = 1;
			persist(guest);
		}

		function maybe(guest) {
			guest.presence = 2;
			persist(guest);
		}

		function reject(guest) {
			guest.presence = 3;
			persist(guest);
		}

		function persist(guest) {
			console.log(JSON.stringify(guest));
		}

	}

})();