$(document).ready(function () {
    layBricks();
function layBricks(){
  $('.brick').each(function () {
    const $el = $(this);
    const offset = $el.offset();
    const width = $el.innerWidth();
    const height = $el.innerHeight();

    // Set the calculated properties as inline CSS
    $el.css({
      top: offset.top,
      left: offset.left,
      width: width,
      height: height
    });
  });

$('.brick').addClass('pos-abs');
}


let flag = 0;
$('.brick').on('click', function () {
      const windowHeight = $(window).height();
      const currentTop = $(this).offset().top;

      $(this).animate({
        top: windowHeight + 200 // move out of view
      }, 800, 'easeInQuad', function () {
        // Optional: remove or reset
        $(this).hide();
      });
      flag ++;

      if (flag == 10){
            $('.brick-intro').animate({
                 top: windowHeight + 200 // move out of view
            }, 800, 'easeInQuad', function () {
        // Optional: remove or reset
        $(this).hide();
      });
      }
    });

});
