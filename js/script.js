"use strict";

$(function() {
  $(".main-header__btn-menu-open, .gnb__btn-menu-close").on("click", function() {
    $(".gnb").toggleClass("on");
  });
});