$(document).ready(function() {
    $('.owl-carousel').owlCarousel({
      items: 3,
      nav: true,
      navText: ['<i class="fa-solid fa-arrow-left arrow-left"></i>','<i class="fa-solid fa-arrow-right arrow-right"></i>'],
      autoplay: true,
      autoplayTimeout: 2000,
      autoplayHoverPause:true
    });
  });