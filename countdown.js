(function () {
	'use strict';

	angular
		.module('weddingApp')
		.controller('CountdownController', countdownController); 


	function countdownController() {
		var vm = this;

		vm.getRemainingDays = getRemainingDays;

		function getRemainingDays() {
			var oneDay = 1000*60*60*24;
			var today = new Date();
			today.setHours(0, 0, 0, 0);
			var theDay = new Date(2015, 10 - 1, 10, 0, 0, 0, 0);

			return Math.abs((theDay - today) / (oneDay));
		}

	}

})();