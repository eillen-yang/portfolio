$(document).ready(function () {
	// Header
	const header = {
		elm: document.querySelector('#header'),
		theme: '',
		sliderEvent: function (slider) {
			// 슬라이더 init, slideChange 이벤트에 따른 액션
			const t = this;

			let activeSlider = slider.slides[ slider.activeIndex ];
			let getHeaderTheme = activeSlider.dataset.headerTheme;

			t.theme = getHeaderTheme;

			if ( ! t.elm.classList.contains('fixed')) {
				t.elm.setAttribute('data-header-theme', t.theme);
			}
		},

		scrollEvent: function () {
			// 스크롤 위치에 따라 header에 fixed 추가
			const t = this;

			if ( window.scrollY > 150 ) {
				t.elm.classList.add('fixed');
			} else {
				t.elm.classList.remove('fixed');

				// fixed 풀렸을 때, 슬라이더 변화에 맞게 헤더 테마 변경
				if ( t.theme != '' ) {
					t.elm.setAttribute('data-header-theme', t.theme);
				}
			}
		},

		anchor: function (target) {
			// gnb 메뉴 클릭 시 anchor 이동
			target = target.replace('#', '#sec-');
			$('html, body').animate({
				scrollTop: $(target).offset().top
			}, 500);
		}
	}

	// header scroll
	header.scrollEvent();
	window.addEventListener('scroll', function (e) {
		header.scrollEvent();
	});

	// header navigation
	var header_link = document.querySelectorAll('#header .nav a');
	header_link.forEach(function (elm, idx) {
		elm.addEventListener('click', function(e) {
			e.preventDefault();

			const target = this.getAttribute('href');
			header.anchor(target);
		});
	});

	// main slide
	const mainSlider = new Swiper('.sec-slider .swiper-container', {
		slidesPerView: 1,
		effect: 'fade',
		fadeEffect: {
		   crossFade: true
		},
		speed: 1000,
		autoplay: {
		   delay: 1500,
		},

		on: {
			init: function (swiper) {
				header.sliderEvent(swiper);
				// console.log(header);
			},
			slideChange: function (swiper) {
				header.sliderEvent(swiper);
				// console.log(header);
			}
		}
	});
	console.log(mainSlider);

	// Project slide
	const contentSlide = new Swiper('.contentSlide .swiper-container', {
		spaceBetween: 10,
		loop: true,
		loopedSlides: 4,
		watchSlidesVisibility: true,
		watchSlidesProgress: true,
		allowTouchMove: false,
	});

	const thumbnailImg = new Swiper('.thumbnailImg .swiper-container', {
		spaceBetween: 5,
		slidesPerView: 'auto',
		loop: true,
		loopedSlides: 4,
		allowTouchMove: false,
		slideToClickedSlide: true,
		grabCursor: true,
		thumbs: {
			swiper: contentSlide
		},
		navigation: {
			nextEl: '.nextEl',
		},
		breakpoints: {
			// when window width is >= 320px
			320: {
			  slidesPerView: 1.2
			},
			// when window width is >= 480px
			480: {
			  slidesPerView: 2.5
			},
			// when window width is >= 640px
			768: {
			  slidesPerView: 3.2
			},
			// when window width is >= 1280px
			1024: {
			  slidesPerView: 3.8
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

				// console.log(target);
			}
		});
	});

		var designer = function () {
			$.ajax({
				url: 'https://randomuser.me/api/',
				data: {
					gender: '',
					results: 4
				},
				dataType: 'json',

				success: function (data) {
					var output = '';

					for(var i = 0; i < 4; i++) {
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

						// console.log(user);

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

						// console.log(user);

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

						// console.log(user);

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

