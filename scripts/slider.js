$(document).ready(function () {
	const slider = $('.products__list').bxSlider({
		pager: false,
		controls: false,
	});

	$('.slider__arrow--left').on('click', () => {
		slider.goToPrevSlide();
	});

	$('.slider__arrow--right').on('click', () => {
		slider.goToNextSlide();
	});
});
