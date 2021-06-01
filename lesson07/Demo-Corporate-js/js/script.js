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

  let pos2 = $(".wrapper").eq(2).offset();
  console.log(pos2);

  $(window).on("scroll", function() {
    if ($(this).scrollTop() > pos2.top - 400) {
      $(".wrapper").eq(2).addClass("tx");
    }
  });
});




