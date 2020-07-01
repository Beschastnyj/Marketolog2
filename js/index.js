$(document).ready(function () {
	$(".intro__burger").click(function (event) {
		$(".intro__burger, .intro__menu").toggleClass("active");
		$("body").toggleClass("lock");
	});
	$(".trouble__range-item-head").click(function (event) {
		if ($('.trouble__range').hasClass('one')) {
			$('.trouble__range-item-head').not($(this)).removeClass('active');
			$('.trouble__range-item-body').not($(this).next()).slideUp(300);
		}
		$(this).toggleClass("active").next().slideToggle(300);
	});
	$(".expertise__slider").slick({
		slidesToShow: 5,
		speed: 1000,
		autoplay: true,
		autoplaySpeed: 2000,
		pauseOnFocus: true,
		responsive: [  //адаптив для слайдера
			{
				breakpoint: 1700, //для примера
				settings: {
					slidesToShow: 4
				}
			}, {
				breakpoint: 1270, //для примера
				settings: {
					slidesToShow: 3
				}
			}, {
				breakpoint: 993, //для примера
				settings: {
					slidesToShow: 2
				}
			}, {
				breakpoint: 767, //для примера
				settings: {
					slidesToShow: 1
				}
			}
		],
	});
	$('.mention__slider').slick({
		infinite: true,
		slidesToShow: 3,
		slidesToScroll: 1,
		arrows: true,
		// responsive: [
		// 	{
		// 		breakpoint: 1700,
		// 		settings: {
		// 			slidesToShow: 3,
		// 		}
		// 	}
		// ]
	});
	$('.clients__slider').slick({
		slidesToShow: 1,
		infinite: true,
		speed: 900,
	});
	$('.questions__box-item').click(function (event) {
		$('.questions__box-item').removeClass('active');
		$(this).addClass('active');
		if ($('.questions__box-item--one').hasClass('active')) {
			$('.questions__unit-item').removeClass('active')
			$('.questions__unit-item--one').addClass('active')
		} else if ($('.questions__box-item--two').hasClass('active')) {
			$('.questions__unit-item').removeClass('active')
			$('.questions__unit-item--two').addClass('active')
		} else if ($('.questions__box-item--three').hasClass('active')) {
			$('.questions__unit-item').removeClass('active')
			$('.questions__unit-item--three').addClass('active')
		} else if ($('.questions__box-item--four').hasClass('active')) {
			$('.questions__unit-item').removeClass('active')
			$('.questions__unit-item--four').addClass('active')
		} else if ($('.questions__box-item--five').hasClass('active')) {
			$('.questions__unit-item').removeClass('active')
			$('.questions__unit-item--five').addClass('active')
		} else if ($('.questions__box-item--six').hasClass('active')) {
			$('.questions__unit-item').removeClass('active')
			$('.questions__unit-item--six').addClass('active')
		} else if ($('.questions__box-item--seven').hasClass('active')) {
			$('.questions__unit-item').removeClass('active')
			$('.questions__unit-item--seven').addClass('active')
		} else if ($('.questions__box-item--eight').hasClass('active')) {
			$('.questions__unit-item').removeClass('active')
			$('.questions__unit-item--eight').addClass('active')
		} else if ($('.questions__box-item--nine').hasClass('active')) {
			$('.questions__unit-item').removeClass('active')
			$('.questions__unit-item--nine').addClass('active')
		}
	})
});
