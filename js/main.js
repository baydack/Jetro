$(document).ready(function(){
	$('.slider__inner').slick({
	arrows:true,
	dots:false,
	slidesToShow:1,
	slidesToScroll:1,
	speed:1000,
	asNavFor:".gallery__small",
	});
	
	$('.gallery__small').slick({
	slidesToShow: 6,
	slidesToScroll: 1,
	asNavFor: '.slider__inner',
	dots: true,
	focusOnSelect: true
	});

	$('.header__menu-btn').on('click', function(){
		$('.menu').slideToggle();
	});
	$(".menu__link").click(function() {
		$(".menu__link").removeClass("menu__link--active");         
		$(this).toggleClass("menu__link--active");
   })

	});



