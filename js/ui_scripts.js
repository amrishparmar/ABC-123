$(document).ready(function() {

	$('body').on('click', '.trans-a', function(e) {
		var target = $(this).attr('href');
		// fade out
		$('body').fadeOut('fast', function() {
			// go to next page
			location.href = target;
		});
		e.preventDefault();
	});

	// fade page in on page load
	$('body').hide().fadeIn('fast');

});