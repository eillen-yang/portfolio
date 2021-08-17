$(document).ready(function () {
	// main slide
	const mainSlider = new Swiper('.sliderMain', {
		slidesPerView: 1,
		speed: 1000,
		effect: 'fade',
		fadeEffect: {
			crossFade: true
		},
		autoplay: {
			delay: 3000,
		}
	});

	// Project slide
	const bigSlide = new Swiper('.bigSlide', {
		spaceBetween: 10,
		loop: true,
		loopedSlides: 4,
		watchSlidesVisibility: true,
		watchSlidesProgress: true,
	});
	const smailSlide = new Swiper('.smallSlide', {
		spaceBetween: 5,
		slidesPerView: 4.5,
		loop: true,
		loopedSlides: 5,
		thumbs: {
			swiper: bigSlide
		},
		navigation: {
			nextEl: '.nextEl',
		},
		breakpoints: {
			// when window width is >= 320px
			320: {
			  slidesPerView: 2.2
			},
			// when window width is >= 480px
			480: {
			  slidesPerView: 2.5
			},
			// when window width is >= 640px
			640: {
			  slidesPerView: 3.8
			},
			// when window width is >= 640px
			1280: {
			  slidesPerView: 4.8
			}
		}
	});

	// tem
	$('.tabs').each(function (index, element) {
		var btn = $(this).find('.tabs-nav a');
		var content = $(this).find('.tabs-content');

		btn.on('click', function (e) {
			e.preventDefault();
			var t = $(this);
			var target = $(this).attr('href');
				target = target.replace('#', '');

			if ( ! $(this).hasClass('active') ) {
				t.parent().siblings().find('a').removeClass('active');
				t.addClass('active');

				content.find('.tab-common').removeClass('active');
				content.find('.' + target).addClass('active');

				console.log(target);
			}
		});
	});

		var designer = function () {
			$.ajax({
				url: 'https://randomuser.me/api/',
				data: {
					gender: '',
					results: 3
				},
				dataType: 'json',

				success: function (data) {
					var output = '';

					for(var i = 0; i < 3; i++) {
						var user = data.results[i];

						output += '<li>';
						output += '<div class="item">';
						output += '	<div class="item-thumb">';
						output += '		<img src="'+user.picture.large+'" alt="user images">';
						output += '	</div>';
						output += ' ';
						output += '	<div class="item-data">';
						output += '		<div class="name">'+user.name.first+'</div>';
						output += ' 	<div class="gender"> '+user.gender+' </div>';
						output += ' 	<div class="item-icon">';
						output += '			<div class="email"><a href="mailto:'+ user.email +'"><i class="far fa-envelope"></i></a></div>';
						output += '			<div class="tel"><a href="tel:'+ user.phone +'"><i class="fas fa-phone"></i></a></div>';
						output += '			<div class="city"><a href="javascript:void(0)"><i class="fas fa-map-marker-alt"></i></a></div>';
						output += '		</div>';
						output += '	</div>';
						output += '</div>';
						output += '</li>';

						console.log(user);

						$('.tab01 ul').html(output);	//랜덤으로 바뀌기
					}
				}
			});
		}
		designer();

		var backend = function () {
			$.ajax({
				url: 'https://randomuser.me/api/',
				data: {
					gender: 'male',
					results: 2
				},
				dataType: 'json',

				success: function (data) {
					var output = '';

					for(var i = 0; i < 2; i++) {
						var user = data.results[i];

						output += '<li>';
						output += '<div class="item">';
						output += '	<div class="item-thumb">';
						output += '		<img src="'+user.picture.large+'" alt="user images">';
						output += '	</div>';
						output += ' ';
						output += '	<div class="item-data">';
						output += '		<div class="name">'+user.name.first+'</div>';
						output += ' 	<div class="gender"> '+user.gender+' </div>';
						output += ' 	<div class="item-icon">';
						output += '			<div class="email"><a href="mailto:'+ user.email +'"><i class="far fa-envelope"></i></a></div>';
						output += '			<div class="tel"><a href="tel:'+ user.phone +'"><i class="fas fa-phone"></i></a></div>';
						output += '			<div class="city"><a href="city: '+user.city+'"><i class="fas fa-map-marker-alt"></i></a></div>';
						output += '		</div>';
						output += '	</div>';
						output += '</div>';
						output += '</li>';

						console.log(user);

						$('.tab02 ul').html(output);	//랜덤으로 바뀌기
					}
				}
			});
		}
		backend();

		var frontend = function () {
			$.ajax({
				url: 'https://randomuser.me/api/',
				data: {
					gender: 'female',
					results: 3
				},
				dataType: 'json',

				success: function (data) {
					var output = '';

					for(var i = 0; i < 3; i++) {
						var user = data.results[i];

						output += '<li>';
						output += '<div class="item">';
						output += '	<div class="item-thumb">';
						output += '		<img src="'+user.picture.large+'" alt="user images">';
						output += '	</div>';
						output += ' ';
						output += '	<div class="item-data">';
						output += '		<div class="name">'+user.name.first+'</div>';
						output += ' 	<div class="gender"> '+user.gender+' </div>';
						output += ' 	<div class="item-icon">';
						output += '			<div class="email"><a href="mailto:'+ user.email +'"><i class="far fa-envelope"></i></a></div>';
						output += '			<div class="tel"><a href="tel:'+ user.phone +'"><i class="fas fa-phone"></i></a></div>';
						output += '			<div class="city"><a href="city: '+user.city+'"><i class="fas fa-map-marker-alt"></i></a></div>';
						output += '		</div>';
						output += '	</div>';
						output += '</div>';
						output += '</li>';

						console.log(user);

						$('.tab03 ul').html(output);	//랜덤으로 바뀌기
					}
				}
			});
		}
		frontend();

	//contact us
	window.sendRequest = function(form) {
		// form 데이터 가져오기
		const username = form.username;
		const email = form.email;
		const message = form.message;

		// 유효성 검사
		if ( username.value == '' ) {
			alert('Company or Your-name is required.');
			username.focus();

			return false;
		}

		if ( email.value == '' ) {
			alert('Email is required.');
			email.focus();

			return false;
		}

		if ( message.value == '' ) {
			alert('Message is required.');
			message.focus();

			return false;
		}

		// 메일보내기
		message.value = message.value.replace('\n', '%0D%0A');
		window.open('mailto:yangareum0130@gmail.com?subject=[구인 제안] Request Project&body=Company or Your-name:' + username.value + '%0D%0AEmail: ' + email.value + '%0D%0AMessage: ' + message.value);

		return false;
	}
});

