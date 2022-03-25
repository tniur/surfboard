$(document).ready(function () {
	const slider = $('.products__list').bxSlider({
		pager: false,
		controls: false,
	});

	$('.slider__control--left').on('click', () => {
		slider.goToPrevSlide();
	});

	$('.slider__control--right').on('click', () => {
		slider.goToNextSlide();
	});
});
