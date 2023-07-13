$(document).ready(function() {
    $('.menu-icon').click(function() {
      $('.overlay').fadeIn(200);
      $('.menu').css('left', '0');
    });
  
    $('.close-icon').click(function() {
      $('.overlay').fadeOut(200);
      $('.menu').css('left', '-75%');
    });
});