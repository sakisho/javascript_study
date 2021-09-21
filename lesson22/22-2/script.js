$(function() {
  'use strict';

  let
    startPos = 0,
    speed = 100,
    objElem = $('.scrolldown');

  $(window).on('scroll', function() {
    if ($(this).scrollTop() <= startPos) {
      objElem.stop().fadeIn(speed);
    } else {
      objElem.stop().fadeOut(speed);
    }
  });
});