
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
		loopedSlides: 2,
		watchSlidesVisibility: true,
		watchSlidesProgress: true,
	});
	const smailSlide = new Swiper('.smallSlide', {
		spaceBetween: 10,
		slidesPerView: 2.5,
		loop: true,
		loopedSlides: 3,
		thumbs: {
			swiper: bigSlide
		},
		navigation: {
			nextEl: '.nextEl',
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

	$(document).ready(function () {
		var designer = function () {
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
						output += '		<img src="'+user.picture.large+'" alt="사용자 이미지">';
						output += '	</div>';
						output += ' ';
						output += '	<div class="item-data">';
						output += '		<div class="name">'+user.name.first+'</div>';
						output += '		<div class="tel"><a href="tel:'+ user.phone+'">'+user.phone+'</a></div>';
						output += '		<div class="email"><a href="mailto:'+ user.email+'">'+ user.email+'</a></div>';
						output += '		<div class="address">'+ user.location.city+'</div>';
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
	});

	//contact us
	function checkAll() {
		if (!checkName(form.name.value)) {
			return false;
		} else if (!checkMail(form.mail.value)) {
            return false;
        } else if  (!checkMsg(form.msg.value)) {
           	return false;
        }
        return true;
    }

	function checkExistData(value, dataName) {
		if (value == "") {
			alert(dataName + " 입력해주세요");
			return false;
		}
		return true;
	}

	function checkMail(email) {
        //mail이 입력되었는지 확인하기
        if (!checkExistData(email, "이메일을"))
            return false;
        var emailRegExp = /^[A-Za-z0-9_]+[A-Za-z0-9]*[@]{1}[A-Za-z0-9]+[A-Za-z0-9]*[.]{1}[A-Za-z]{1,3}$/;
        if (!emailRegExp.test(email)) {
            alert("이메일 형식이 올바르지 않습니다");
            form.email.value = "";
            form.email.focus();
            return false;
        }

		console.log(email);
        return true; //확인이 완료되었을 때

    }
