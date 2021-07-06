$(function() {
  "use strict";

  let
    elem = $("li"),
    args = [],
    len;

  elem.each(function(index, obj){
    args.push($(obj).text());
  });

  len = args.length - 1;

  for (let i = len; i > 0; i--){
    let
      j = Math.floor(Math.random() * (i + 1)),
      tmp = args[i];

    args[i] = args[j];
    args[j] = tmp;
  }

  elem.each(function(index, obj){
    $(obj).text(args[index]);
  });

  $("li").on("click", function(){
    let tmp;

    tmp = $(this).text();
    $(this).text(elem.eq(1).text());
    elem.eq(1).text(tmp);
  });
});
