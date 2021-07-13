(function($){
  $.fn.sample = function(options){
    var settings = $.extend({
      color: "#f00",
      size : 10
    }, options);

    this.css({
      "color": settings.color,
      "fontSize": settings.size + "px"
    });
    return this;
  };
}(jQuery));