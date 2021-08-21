$(function(){
  "use strict";

  let bar = new ProgressBar.Line(splash_text, {
    "easing": "easeIn",
    "strokeWidth": 0.2,
    "duration": 1000,
    "trailWidth": 0.2,
    "trailColor": "#bbb",
    "text": {
      "style": {
        "color": "#fff",
        "font-size": "1.2rem",
        "left": "50%",
        "margin": "-30px 0 0 0",
        "padding": 0,
        "position": "absolute",
        "top": "50%",
        "transform": "translate(-50%, -50%)"
      },
      "autoStyleContainer": false
    },
    "step": function(state, bar) {
      bar.setText(Math.round(bar.value() * 100) + "%");
    }
  });

  bar.animate(1.0, function() {
    $("#splash_text").fadeOut(10);
    $(".loader_cover-up").addClass("cover-anime");
    $(".loader_cover-down").addClass("cover-anime");
    $("#splash").fadeOut();
  })
});