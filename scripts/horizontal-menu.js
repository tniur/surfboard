function mesureWidth() {
	let reqItemWidth = 0;

	const screenWidth = $(window).width();

	const itemsArr = $('.horizontal-menu__item');
	const itemsQuantity = itemsArr.length;
	const itemWidth = $('.horizontal-menu__header').width();
	const commonWidth = itemWidth * itemsQuantity;
	const totalWidth = screenWidth - commonWidth;

	const textContainer = $('.horizontal-menu__content-inner');
	const paddingLeft = parseInt(textContainer.css('padding-left'));
	const padding = paddingLeft * 2;

	const isTablet = window.matchMedia('(max-width: 768px)').matches;

	if (isTablet) {
		reqItemWidth = totalWidth;
	} else {
		reqItemWidth = 524;
	}

	return {
		container: reqItemWidth,
		textContainer: reqItemWidth - padding,
	};
}

function closeEverySlide() {
	const contentBox = $('.horizontal-menu__content');
	contentBox.width(0);
	contentBox.removeClass('active');
}

function openSlide(item) {
	const textBox = item.find('.horizontal-menu__content-inner');
	const width = mesureWidth();

	item.width(width.container);
	textBox.width(width.textContainer);
	item.addClass('active');
}

$('.horizontal-menu__list').click((event) => {
	const item = $(event.target).next();

	if (item.hasClass('active')) {
		closeEverySlide();
	} else {
		closeEverySlide();
		openSlide(item);
	}
});
