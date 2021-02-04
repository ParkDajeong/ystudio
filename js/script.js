"use strict";

// FixHeader
function fixHeader(scroll) {
  if(scroll > 150) {
    $(".main-header").addClass("on");
  } else {
    $(".main-header").removeClass("on");
  }
}

$(window).on("scroll resize", function() {
  const scroll = $(document).scrollTop();
  fixHeader(scroll);
});

// Global nav
$(function() {
  $(".main-header__btn-menu-open, .gnb__btn-menu-close").on("click", function() {
    $(".gnb").toggleClass("on");
  });
});

// Slide
$(function() {
  $(".visual .slide").slick({
    arrows: true,
    dots: false,
    fade: true,
    autoplay: true,
    autoplaySpeed: 4000,
    pauseOnHover: false,
    pauseOnFocus: false,
  });
});

// Scroll Animation
$(function() {
  $(".animate").scrolla({
    mobile: false,
    once: false,
  });
});

// Top Button
$(function() {
  $(".footer__btn-top").on("click", function(e) {
    $("html, body").animate({scrollTop: 0}, 600);
  });
});