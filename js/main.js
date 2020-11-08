$(function () {
  $(".header-slider").slick({
    arrows: false,
    vertical: true,
    dots: true,
    dotsClass: "header-dots",
    autoplay: 2000,
  });

  $(".top-menu__btn").on("click", function () {
    $(".top-menu__list").slideToggle();
  });
});
