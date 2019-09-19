$(document).ready(function () {
  
  'use strict';
  
   var c, currentScrollTop = 0,
       navbar = $('header');

   $(window).scroll(function () {

    // var element = document.getElementById("chevron-container");
    // element.classList.add("scrolled");

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
    $('.card').not(this).removeClass('open')
    $('.card').not(this).toggleClass('hidden')
    $(this).toggleClass('open');
    $('.overlay').toggleClass('on');
    $('header').toggle();
    $('footer').toggle();


  })
  
})

$(function() {
  $('.mobile-nav i').click(function(){
    // $(this).find('i').toggle('fa-bars fa-times')
    $('.mobile-nav').find('i').toggle('fa-bars fa-times')
    $('.mobile-nav').toggleClass('clicked')
    $('.mobile-nav').find('li').toggle();
});
});