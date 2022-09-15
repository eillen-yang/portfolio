$(document).ready(function () {
  // Header
  const header = {
    elm: document.querySelector("#header"),
    theme: "",
    sliderEvent: function (slider) {
      // 슬라이더 init, slideChange 이벤트에 따른 액션
      const t = this;

      let activeSlider = slider.slides[slider.activeIndex];
      let getHeaderTheme = activeSlider.dataset.headerTheme;

      t.theme = getHeaderTheme;

      if (!t.elm.classList.contains("fixed")) {
        t.elm.setAttribute("data-header-theme", t.theme);
      }
    },

    scrollEvent: function () {
      // 스크롤 위치에 따라 header에 fixed 추가
      const t = this;

      if (window.scrollY > 150) {
        t.elm.classList.add("fixed");
      } else {
        t.elm.classList.remove("fixed");

        // fixed 풀렸을 때, 슬라이더 변화에 맞게 헤더 테마 변경
        if (t.theme != "") {
          t.elm.setAttribute("data-header-theme", t.theme);
        }
      }
    },

    anchor: function (target) {
      // gnb 메뉴 클릭 시 anchor 이동
      target = target.replace("#", "#sec-");
      $("html, body").animate(
        {
          scrollTop: $(target).offset().top,
        },
        500
      );
    },
  };

  // header scroll
  header.scrollEvent();
  window.addEventListener("scroll", function (e) {
    header.scrollEvent();
  });

  // header navigation
  const header_link = document.querySelectorAll("#header .nav a");
  header_link.forEach(function (elm, idx) {
    elm.addEventListener("click", function (e) {
      e.preventDefault();

      const target = this.getAttribute("href");
      header.anchor(target);
    });
  });

  // header mobile nav
  function mobileNavBtn() {
    const Button = document.querySelector(".mobile-nav");
    const Nav = document.querySelector(".nav");
    const body = document.getElementsByTagName("body")[0];

    Button.addEventListener("click", () => {
      Button.classList.toggle("active");
      Nav.classList.toggle("active");
      body.classList.toggle("scroll-lock");
    });
  }
  mobileNavBtn();

  // main slide
  const mainSlider = new Swiper(".sec-slider .swiper-container", {
    slidesPerView: 1,
    effect: "fade",
    fadeEffect: {
      crossFade: true,
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
      },
    },
  });
  // console.log(mainSlider);

  // Project slide
  const thumb_nail = new Swiper(".thumbnailImg", {
    loop: true,
    loopedSlides: 4,
    spaceBetween: 5,
    slidesPerView: 3.6,
    watchSlidesProgress: true,
    slideToClickedSlide: true,
    allowTouchMove: true,
    grabCursor: true,
    navigation: {
      nextEl: ".slide-button.next",
      prevEl: ".slide-button.prev",
    },
    breakpoints: {
      320: {
        slidesPerView: 1.2,
      },
      480: {
        slidesPerView: 2.5,
      },
      768: {
        slidesPerView: 3.2,
      },
      1024: {
        slidesPerView: 3.8,
        allowTouchMove: false,
      },
    },
  });
  const contentSlide = new Swiper(".contentSlide", {
    loop: true,
    loopedSlides: 4,
    spaceBetween: 10,
    watchSlidesVisibility: true,
    watchSlidesProgress: true,
    allowTouchMove: true,
    breakpoints: {
      1024: {
        allowTouchMove: false,
      },
    },
  });
  contentSlide.controller.control = thumb_nail;
  thumb_nail.controller.control = contentSlide;

  // tem
  $(".tabs").each(function (index, element) {
    const btn = $(this).find(".tabs-nav a");
    const content = $(this).find(".tabs-content");

    btn.on("click", function (e) {
      e.preventDefault();
      const t = $(this);
      let target = $(this).attr("href");
      target = target.replace("#", "");

      if (!$(this).hasClass("active")) {
        t.parent().siblings().find("a").removeClass("active");
        t.addClass("active");

        content.find(".tab-common").removeClass("active");
        content.find("." + target).addClass("active");

        // console.log(target);
      }
    });
  });

  //contact us
  window.sendRequest = function (form) {
    // form 데이터 가져오기
    const username = form.username;
    const email = form.email;
    const message = form.message;

    // 유효성 검사
    if (username.value == "") {
      alert("Company or Your-name is required.");
      username.focus();

      return false;
    }

    if (email.value == "") {
      alert("Email is required.");
      email.focus();

      return false;
    }

    if (message.value == "") {
      alert("Message is required.");
      message.focus();

      return false;
    }

    // 메일보내기
    message.value = message.value.replace("\n", "%0D%0A");
    window.open(
      "mailto:yangareum0130@gmail.com?subject=[구인 제안] Request Project&body=Company or Your-name:" +
        username.value +
        "%0D%0AEmail: " +
        email.value +
        "%0D%0AMessage: " +
        message.value
    );

    return false;
  };
});
