(function ($) {
  ("use strict");

  // video popup js
  $(".vidplay").magnificPopup({
    type: "iframe",
    iframe: {
      markup: '<div class="mfp-iframe-scaler">' +
        '<div class="mfp-close"></div>' +
        '<iframe class="mfp-iframe" frameborder="0" allowfullscreen></iframe>' +
        "</div>",
      patterns: {
        youtube: {
          index: "youtube.com/",
          id: "v=",
          src: "https://www.youtube.com/embed/%id%?autoplay=1",
        },
      },
      srcAction: "iframe_src",
    },
  });

  // brands swiper slider
  var swiper = new Swiper('.mySwiper', {
    slidesPerView: 7,
    spaceBetween: 30,
    loop: true,
    freeMode: true,
    speed: 4000,
    autoplay: {
      delay: 0, 
      disableOnInteraction: false,
    },
  });

})(jQuery);