const switcher = $('.feedbacks__switcher-item');
const allItem = $('.feedbacks__item');

function findCurrentItem(dataAttr) {
	const items = $('.feedbacks__item');
	for (var i = 0; i < items.length; i++) {
		if ($(items[i]).attr('data-linked-with') == dataAttr) {
			return items[i];
		}
	}
}

switcher.on('click', (event) => {
	const currentSwitcher = $(event.currentTarget);
	const dataAttr = currentSwitcher.attr('data-open');
	const currentItem = $(findCurrentItem(dataAttr));
	allItem.removeClass('feedbacks__item--active');
	currentItem.addClass('feedbacks__item--active');
	switcher.removeClass('interactive-avatar--active');
	currentSwitcher.addClass('interactive-avatar--active');
});
