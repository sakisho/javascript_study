$(function(){
  $("#btn").on("click", function() {
    $.colorbox({
      iframe: true,
      innerWidth: 854,
      innerHeight: 526,
      href: "https://www.youtube.com/embed/GrAND1pslP8?autoplay=1&rel=0&frameborder=0&loop=1&playlist=GrAND1pslP8"
    });
  });
});