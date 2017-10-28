$(document).ready(function() {
  $('.sidebar-nav__arrows').click(function(){
    $('.sidebar-nav__header').siblings().slideToggle(200);
    $('.sidebar-nav__arrows--up').toggleClass("sidebar-nav__arrows--hidden")
    $('.sidebar-nav__arrows--down').toggleClass("sidebar-nav__arrows--hidden")
  });
});

  // $('h3.list-header').on "click", (e) ->
  //   if ($(window).width() < 720)
  //     $el = $(e.target)
  //     $el.siblings('ul').slideToggle(200)
  //     $el.toggleClass("white-background")
