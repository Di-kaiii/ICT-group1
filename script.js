$(document).ready(()  => $('#hamburger-menu').click() => {
	$('hamburger-menu').toggleclass('active')
	$('#nav-menu').toggleclass('active')
})

let navtext =["<i class='bx bx-chevron-left'></i>", "<i class='bx-chevron-right'></i>"]

$('#video-carousel').owlCarousel({
	items:1
	dots: false,
	loop: true,
	nav:true,
	navtext: navtext,
	autoplay: true,
	autoplayhoverpause: true,
})

$('#top-activities-slide').owlCarousel({
	items:2
	dots:false,
	loop:true,
	autoplay: true,
	autoplayhoverpause: true,
	responsive: {
		500: {
			items: 3
		}
		1280: {
			items: 4
		}
		1600: {
			items: 6
		}
	}
})

$('.activities-slide').owlCarousel({
	items:2
	dots:false,
	nav:true,
	navtext: navtext
	margin: 15,
	responsive: {
		500: {
			items: 3
		}
		1280: {
			items: 4
		}
		1600: {
			items: 6
		}
	}
})