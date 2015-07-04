angular.module('weddingApp', [])
	.controller('CountdownController', function () {
		var countdown = this;

		countdown.getRemainingDays = function() {
			var oneDay = 1000*60*60*24;
			var today = new Date();
			today.setHours(0, 0, 0, 0);
			var theDay = new Date(2015, 10 - 1, 10, 0, 0, 0, 0);

			return Math.abs((theDay - today) / (oneDay));
		};

	});