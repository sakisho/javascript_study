$(function(){
  "use strict";

  let bar = new ProgressBar.Line(splash_text, {
    "strokeWidth": 0,
    "duration": 1000,
    "trailWidth": 0,
    "text": {
      "style": {
        "color": "#fff",
        "font-size": "1.2rem",
        "left": "50%",
        "margin": 0,
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
    $("#splash").delay(500).fadeOut(800);
  })
});