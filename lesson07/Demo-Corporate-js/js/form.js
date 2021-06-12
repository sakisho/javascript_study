$(function (){
  "use strict";

  let
    errorFlag,
    formName  = $("[name='name']"),
    formKana  = $("[name='kana']"),
    formEmail = $("[name='email']"),
    formPort  = $("[name='portfolio']"),
    formArray = [formName, formKana, formEmail, formPort];

  $("#form").on("submit", function (){
    errorFlag = true;

    $.each(formArray, function(index, value) {
      if (value.val() === "") {
        value.next().show();
        value.css("background", "#f0d0d0");
        errorFlag = false;
      }
    });
    return errorFlag;
  });

  $.each(formArray, function(index, value) {
    value.on("input", function (){
      if ($(this).val() !== "") {
        $(this).css("background", "#fff");
        $(this).next().hide();
      }
    });
  });
});