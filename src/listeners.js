$(document).ready(function() {
  "use strict";

  var c,
    currentScrollTop = 0,
    navbar = $("header");

  $(window).scroll(function() {
    if ($("body").hasClass("homepage")) {
      var element = document.getElementById("chevron-container");
      element.classList.add("scrolled");
    }

    var a = $(window).scrollTop();
    var b = 20;

    currentScrollTop = a;

    if (c < currentScrollTop && a > b + b) {
      navbar.css("display", "flex");
      navbar.addClass("scrollUp");
    } else if (c > currentScrollTop && !(a <= b)) {
      navbar.removeClass("scrollUp");
    }
    c = currentScrollTop;
  });

  $(function() {
    $(".card").click(function() {
      $(".dark").toggleClass("hidden");
      $(".cards-wrapper").toggleClass("hidden");
      $(".cards").toggleClass("hidden");
      $(".card")
        .not(this)
        .removeClass("open");
      $(".card")
        .not(this)
        .toggleClass("hidden");
      $(this).toggleClass("open");
      $("header").toggle();
      $("footer").toggle();
      $(".page-title").toggleClass("hidden");
      $(this)
        .siblings("h3")
        .toggleClass("hidden");
    });
  });

  $(function() {
    $("#open-navmenu").click(function() {
      $("#open-navmenu").toggle();
      $("#close-navmenu").toggle();
      $("#close-navmenu").focus();
      $(".mobile-nav").toggleClass("clicked");
      $(".mobile-nav")
        .find("li")
        .toggle();
    });
  });

  $(function() {
    $("#close-navmenu").click(function() {
      $("#close-navmenu").toggle();
      $("#open-navmenu").toggle();
      $("#open-navmenu").focus();
      $(".mobile-nav").toggleClass("clicked");
      $(".mobile-nav")
        .find("li")
        .toggle();
    });
  });

  $(function() {
    $("#close-popup").click(function() {
      $(".popup").toggleClass("hidden");
    });
  });

  $(function() {
    $("#open-popup").click(function() {
      $("body")
        .find(".popup")
        .toggleClass("hidden");
    });
  });

  $("iframe").on("load", function() {
    $(this)
      .contents()
      .find("header")
      .remove();
    $(this)
      .contents()
      .find("footer")
      .remove();
    $(this)
      .contents()
      .find("main")
      .css("padding-bottom", "0");
    $(this)
      .contents()
      .find("form")
      .css("margin-bottom", "0");
  });
});
