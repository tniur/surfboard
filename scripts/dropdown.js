const memberName = $('.team__name');

function closeEveryItem() {
	const descriptionWrapper = memberName.next();
	descriptionWrapper.height(0);
	descriptionWrapper.removeClass('team__description--active');
	memberName.removeClass('team__name--active');
}

function openItem(member) {
	const descriptionWrapper = member.next();
	const description = descriptionWrapper.find('.team__description');
	const descriptionHeight = description.height();

	if (descriptionWrapper.hasClass('team__description--active')) {
		closeEveryItem();
	} else {
		closeEveryItem();
		descriptionWrapper.height(descriptionHeight);
		descriptionWrapper.addClass('team__description--active');
		member.addClass('team__name--active');
	}
}

memberName.on('click', (event) => {
	const currentMember = $(event.target);
	openItem(currentMember);
});
