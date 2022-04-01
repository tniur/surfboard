const sections = $('.section');
const display = $('.maincontent');
const sideMenu = $('.menu');
const menuItems = sideMenu.find('.menu__item');

const mobileDetect = new MobileDetect(window.navigator.userAgent);
const isMobile = mobileDetect.mobile();

let inScroll = false;

sections.first().addClass('active');

const countSectionPosition = (sectionEq) => {
	const position = sectionEq * -100;

	if (isNaN(position)) {
		console.error('передано неверное значение в countSectionPosition');
		return 0;
	}
	return position;
};

const changeMenuThereForSection = (sectionEq) => {
	const currentSection = sections.eq(sectionEq);
	const menuTheme = currentSection.attr('data-sidemenu-theme');
	const activeClass = 'menu--dark';

	if (menuTheme == 'black') {
		sideMenu.addClass(activeClass);
	} else {
		sideMenu.removeClass(activeClass);
	}
};

const resetActiveClassForItem = (items, itemEq, activeClass) => {
	items.eq(itemEq).addClass(activeClass).siblings().removeClass(activeClass);
};

const performTransition = (sectionEq) => {
	const transitionOver = 1000;
	const mouseInertionOver = 300;

	if (inScroll == false) {
		inScroll = true;

		const position = countSectionPosition(sectionEq);

		changeMenuThereForSection(sectionEq);

		display.css({
			transform: `translateY(${position}%)`,
		});

		resetActiveClassForItem(sections, sectionEq, 'active');

		setTimeout(() => {
			inScroll = false;
			resetActiveClassForItem(menuItems, sectionEq, 'menu__item--active');
		}, transitionOver + mouseInertionOver);
	}
};

const viewportScroller = (direction) => {
	const activeSection = sections.filter('.active');
	const nextSection = activeSection.next();
	const prevSection = activeSection.prev();

	return {
		next() {
			if (nextSection.length) {
				performTransition(nextSection.index());
			}
		},
		prev() {
			if (prevSection.length) {
				performTransition(prevSection.index());
			}
		},
	};
};

$(window).on('wheel', (e) => {
	const deltaY = e.originalEvent.deltaY;
	const scroller = viewportScroller();

	if (deltaY > 0) {
		scroller.next();
	}

	if (deltaY < 0) {
		scroller.prev();
	}
});

$(window).on('keydown', (e) => {
	const tagName = e.target.tagName.toLowerCase();
	const userTypingInInputs = tagName == 'input' || tagName == 'textarea';
	const scroller = viewportScroller();

	if (userTypingInInputs) return;

	switch (e.keyCode) {
		case 40:
			scroller.next();
			break;
		case 38:
			scroller.prev();
			break;
	}
});

$('.wrapper').on('touchmove', (e) => e.preventDefault());

$('[data-scroll-to]').click((event) => {
	event.preventDefault();

	const current = $(event.currentTarget);

	const target = current.attr('data-scroll-to');
	const reqSection = $(`[data-section-id=${target}]`);
	performTransition(reqSection.index());
});

if (isMobile) {
	// https://github.com/mattbryson/TouchSwipe-Jquery-Plugin
	$('body').swipe({
		swipe: function (event, direction) {
			const scroller = viewportScroller();
			let scrollDirection = '';

			if (direction == 'up') scrollDirection = 'next';
			if (direction == 'down') scrollDirection = 'prev';

			scroller[scrollDirection]();
		},
	});
}
