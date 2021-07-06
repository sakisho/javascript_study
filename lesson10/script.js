$(function() {
  "use strict";

  let
    elem = $("li"),
    args = [],
    len,
    pannel = 3;

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

  /**
   * checkPannel
   *
   * @param string direction
   * @param number index
   */
  function checkPannel(direction, index) {
    let
      tmp = elem.eq(index).text(),
      value;

    switch (direction) {
      case "R": value = 1; break;
      case "B": value = pannel; break;
      case "L": value = -1; break;
      case "T": value = -pannel; break;
    }
    if (elem.eq(index + value).text() === "") {
      elem.eq(index).text(elem.eq(index + value).text());
      elem.eq(index + value).text(tmp)
    }
  }

  /**
   * clearJudgment
   */
  function clearJudgment() {
    elem.each(function(index, obj){
      console.log($(obj).text());
    });
  }

  $("li").on("click", function(){
    let index = $(this).index();

    switch (index) {
      case 0:
        checkPannel("R", index);
        checkPannel("B", index);
        break;
      case 1:
        checkPannel("R", index);
        checkPannel("B", index);
        checkPannel("L", index);
        break;
      case 2:
        checkPannel("B", index);
        checkPannel("L", index);
        break;
      case 3:
        checkPannel("T", index);
        checkPannel("R", index);
        checkPannel("B", index);
        break;
      case 4:
        checkPannel("T", index);
        checkPannel("R", index);
        checkPannel("B", index);
        checkPannel("L", index);
        break;
      case 5:
        checkPannel("T", index);
        checkPannel("B", index);
        checkPannel("L", index);
      case 6:
        checkPannel("T", index);
        checkPannel("R", index);
        break;
      case 7:
        checkPannel("T", index);
        checkPannel("R", index);
        checkPannel("L", index);
        break;
      case 8:
        checkPannel("T", index);
        checkPannel("L", index);
        break;
    }
    clearJudgment();
  });
});
