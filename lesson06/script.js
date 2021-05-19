$(function(){
  "use strict";

  var image = $("#image");

  $("#btn1").on("click", function(){
    image.toggleClass("scale");
  });
  $("#btn2").on("click", function(){
    image.toggleClass("opacity");
  });
  $("#btn3").on("click", function(){
    image.toggleClass("ty");
  });

});