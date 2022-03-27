const validateFields = (form, fieldsArray) => {
	fieldsArray.forEach((field) => {
		field.removeClass('input-error');
		if (field.val().trim() === '') {
			field.addClass('input-error');
		}
	});

	const errorFields = form.find('.input-error');
	return errorFields.length === 0;
};

function showModal() {
	$('#modal').css('display', 'flex');
	$('body').css('overflow-y', 'hidden');
	$(document).bind('touchmove', false);
}

function hideModal() {
	$('#modal').css('display', 'none');
	$('body').css('overflow-y', 'visible');
	$(document).bind('touchmove', true);
}

$('.form').submit((event) => {
	event.preventDefault();

	const modal = $('#modal');
	const content = modal.find('.modal__content');

	const form = $(event.currentTarget);
	const name = form.find("[name='name']");
	const phone = form.find("[name='phone']");
	const comment = form.find("[name='comment']");
	const to = form.find("[name='to']");

	const isValid = validateFields(form, [name, phone, comment, to]);

	if (isValid) {
		$.ajax({
			url: 'https://webdev-api.loftschool.com/sendmail',
			method: 'post',
			data: {
				name: name.val(),
				phone: phone.val(),
				comment: comment.val(),
				to: to.val(),
			},
			success: (data) => {
				content.text(data.message);
				console.log(data.message);
				showModal();
			},
			error: (data) => {
				const message = data.responseJSON.message;
				content.text(message);
				console.log(message);
				showModal();
			},
		});
	}
});

$('.modal__close').click((event) => {
	event.preventDefault();
	hideModal();
});
