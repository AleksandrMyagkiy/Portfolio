const hamburger = document.querySelector('.hamburger'),
    menu = document.querySelector('.menu'),
    closeElem = document.querySelector('.menu__close');

hamburger.addEventListener('click', () => {
    menu.classList.add('active');
});

closeElem.addEventListener('click', () => {
    menu.classList.remove('active');
});

const counters = document.querySelectorAll('.skills__progress-counter'),
    lines = document.querySelectorAll('.skills__progress-line span');

    counters.forEach( (item, i) => {
        lines[i].style.width = item.innerHTML;
    });


               //Post

	function valideForms(form){
		$(form).validate({
			rules: {
				name: "required",
				email: {
					required: true,
					email: true
				}
			},
			messages: {
				name: "Пожалуйста, введите свое имя",
				email: {
				  required: "Пожалуйста, введите свою почту",
				  email: "Неправильно введен адрес почты"
				}
			}
		});
	};

    valideForms('#contacts-form');
	valideForms('#contacts form');
	valideForms('#order form');

	//$('input[name=phone]').mask("+38 (999) 999-99-99");

	$('form').submit(function(e) {
		e.preventDefault();
		$.ajax({
			type: "POST",
			url: "mailer/smart.php",
			data: $(this).serialize()
		}).done(function() {
			$(this).find("input").val("");
			$('#contacts, #order').fadeOut();
			$('.overlay, #thanks').fadeIn('slow');

			$('form').trigger('reset');
		});
		return false;
	});
