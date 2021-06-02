$(function (){
  "use strict";

  $("#form").on("submit", function (){
    if ($("[name='name']").val() === "") {
      console.log("名前を入力してね");
      return false;
    }
  });
});