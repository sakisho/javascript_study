$(function(){
  "use strict";

  let cookieName = "manabito_test";

  $("#regist").on("click", function(){
    if (!$.cookie(cookieName)) {
      $.cookie(
        cookieName,
        Date.now(),
        {
          "expire": 1,
          "path": "/"
          // "domain": "",
          // secure: true
        }
      );
      confirm("登録が完了しました");
    } else {
      confirm("登録済みです");
    }
  });

  $("#delete").on("click", function (){
    $.removeCookie(cookieName, {"path": "/"});
    confirm("削除が完了しました");
  });
});