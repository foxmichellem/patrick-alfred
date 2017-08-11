$(document).ready(function() {
  $('.nav__header').click(function(){
    $(this).siblings().slideToggle(200);
  });
});

  // $('h3.list-header').on "click", (e) ->
  //   if ($(window).width() < 720)
  //     $el = $(e.target)
  //     $el.siblings('ul').slideToggle(200)
  //     $el.toggleClass("white-background")
