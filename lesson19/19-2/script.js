$(function(){
  "use strict";

  $(".has-child").on("mouseover", function() {
    $(this).addClass("active");
  });
  $(".has-child").on("mouseout", function() {
    $(this).removeClass("active");
  });
});