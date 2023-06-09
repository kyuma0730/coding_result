'use strict';

jQuery(window).on('scroll', function () {

 if (jQuery('#nav__pc').height() < jQuery(this).scrollTop()) {
jQuery('#nav__pc').addClass('change-color'); }
 else {
 jQuery('#nav__pc').removeClass('change-color'); } });


 $(function () {
  const hamburger = $(".hamburger");
  const nav = $(".nav");

  hamburger.click(function () {
    $(this).find(".hamburger_bar").toggleClass("is_active");
    nav.toggleClass("is_active");
  });
});

$(function () {
  $('a[href^="#"]').click(function () {
    var href = $(this).attr("href");
    var target = $(href == "#" || href == "" ? 'html' : href);
    var position = target.offset().top;
    var speed = 500;
    $("html, body").animate({
      scrollTop: position
    }, speed, "swing");
    return false;
  });
});
