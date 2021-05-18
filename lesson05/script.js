$(function() {
  "use strict";

  var arrow = $("#arrow");
  var posY = 500;
  var fadeSpeed = 300;
  var animateTop = 500;

  // DOMContentLoaded
  $(window).on("scroll", function() {
    if ($(this).scrollTop() > posY) {
      arrow.fadeIn(fadeSpeed); // 表示
    } else if ($(this).scrollTop() < posY) {
      arrow.fadeOut(fadeSpeed); // 非表示
    }
  });

  arrow.on("click", function() {
    $("html, body").animate({scrollTop: 0}, animateTop);
  });
});