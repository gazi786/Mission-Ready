/*!
	Mission Ready - Mission 01
	Alshafaraz Gazi
	Personal Portfolio
*/
// Preloader
$(window).on('load', function () {
	$("#preloader").delay(600).fadeOut();
});
// smooth scroll
$(document).ready(function () {
	$(".navbar .nav-link").on('click', function (event) {

		if (this.hash !== "") {

			event.preventDefault();

			var hash = this.hash;

			$('html, body').animate({
				scrollTop: $(hash).offset().top
			}, 700, function () {
				window.location.hash = hash;
			});
		}
	});
});

//Back to top
$('#back-to-top').on('click', function () {
	$('body,html').animate({
		scrollTop: 0
	}, 700);
});


// navbar toggle
$('#nav-toggle').click(function () {
	$(this).toggleClass('is-active');
	$('ul.nav').toggleClass('show');
});

// On Scroll
$(window).on('scroll', function () {
	var wScroll = $(this).scrollTop();
	// Back To Top Appear
	wScroll > 700 ? $('#back-to-top').fadeIn() : $('#back-to-top').fadeOut();
});
