$( document ).ready(function() {
	$('nav').affix({
	      offset: {
	        top: $('#myCarousel').height()
	      }
	});

	$('nav ul li a').click(function() {
		$('#navigationbar').collapse('hide');
	});

});