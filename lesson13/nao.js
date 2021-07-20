(function ($) {
  $.fn.topMove = function (options) {
    let settings = $.extend({
      posY: 500,
      fadeSpeed: 300,
      animateTop: 500
    }, options);

    return this.each(function () {
      let self = $(this);

      //DOMContentLoaded
      $(window).on("scroll", function () {
        console.log("a");
        if ($(this).scrollTop() > settings.posY) {
          self.fadeIn(settings.fadeSpeed);//表示非表示の場合はhide
        } else if ($(this).scrollTop() < settings.posY) {
          self.fadeOut(settings.fadeSpeed);//表示
        }
      });
      self.on("click", function () {
        $("html, body").animate({
          scrollTop: 0
        }, settings.animateTop);
      });
    });
  };
}(jQuery));