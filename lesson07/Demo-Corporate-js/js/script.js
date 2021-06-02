$(function() {
  "use strict";

  let pieNode = ".pie-chart";
  let pieData = {
    labels: ["Webデザイナー", "Webデベロッパー", "サーバーエンジニア", "営業職"],
    series: [14, 9, 8, 6]
  };
  let pieOptions = {
    height: "440px",
    width: "100%"
  };

  new Chartist.Pie(pieNode, pieData, pieOptions);

  let barNode = ".bar-chart";
  let barData = {
    labels: ["2018年", "2019年", "2020年"],
    series: [[10, 16, 29]]
  }
  let barOptions = {
    axisY: {
      offset: 60,
      scaleMinSpace: 50,
      labelInterpolationFunc: function(value) {
        return value + "人"
      }
    },
    height: "400px",
    width: "100%"
  };

  new Chartist.Bar(barNode, barData, barOptions);

  $(".wrapper").eq(0).addClass("tx");
  $(".wrapper").eq(1).addClass("tx");

  const posStart = 400;

  let
    pos2 = $(".wrapper").eq(2).offset().top - posStart,
    pos3 = $(".wrapper").eq(3).offset().top - posStart;

  $(window).on("scroll", function() {
    if ($(this).scrollTop() > pos2) {
      $(".wrapper").eq(2).addClass("tx");
    }
    if ($(this).scrollTop() > pos3) {
      $(".wrapper").eq(3).addClass("tx");
    }
  });
});




