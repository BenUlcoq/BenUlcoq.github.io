$(document).ready(function () {
  
  'use strict';
  
   var c, currentScrollTop = 0,
       navbar = $('header');

   $(window).scroll(function () {

    if ($("body").hasClass("homepage")) {
    var element = document.getElementById("chevron-container");
    element.classList.add("scrolled");
    }

      var a = $(window).scrollTop();
      var b = navbar.height();
     
      currentScrollTop = a;
     
      if (c < currentScrollTop && a > b + b) {
        navbar.addClass("scrollUp");
      } else if (c > currentScrollTop && !(a <= b)) {
        navbar.removeClass("scrollUp");
      }
      c = currentScrollTop;
  });
  
});

$(function() {
  $('.card').click(function() {
    $(this).css("transform","scale(1)");
    $('.dark').toggleClass('hidden')
    $('.projects-wrapper').toggleClass('hidden')
    $('.card').not(this).removeClass('open')
    $('.card').not(this).toggleClass('hidden')
    $(this).toggleClass('open');
    $('header').toggle();
    $('footer').toggle();
    $('.page-title').toggleClass('hidden');
    $(this).siblings('h2').toggleClass('hidden');
  })
  
})

$("#open-navmenu").keyup(function(event) {
  if (event.keyCode === 13) {
      $("#id_of_button").click();
  }
});

$("#close-navmenu").keyup(function(event) {
  if (event.keyCode === 13) {
      $("#id_of_button").click();
  }
});


$(function() {
  $('#open-navmenu').click(function(){
    $('#open-navmenu').toggle();
    $('#close-navmenu').toggle();
    $('#close-navmenu').focus();
    $('.mobile-nav').toggleClass('clicked');
    $('.mobile-nav').find('li').toggle();
});


$(function() {
  $('#close-navmenu').click(function(){
    $('#close-navmenu').toggle();
    $('#open-navmenu').toggle();
    $('#open-navmenu').focus();
    $('.mobile-nav').toggleClass('clicked');
    $('.mobile-nav').find('li').toggle();
});
});
});