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


$('.brick').on('click', function() {
    const windowHeight = $(window).height();
    const clickedBrick = $(this);
    
    // Animate the clicked brick
    clickedBrick.animate({
        top: windowHeight + 200
    }, 800, 'easeInQuad', function() {
        $(this).hide();
    });
    
    // Get all other bricks except the clicked one
    const otherBricks = $('.brick').not(clickedBrick);
    
    // Select 3 random bricks (or fewer if there aren't enough)
    const randomBricks = getRandomElements(otherBricks, 3);
    
    // Animate each random brick
    randomBricks.each(function() {
        $(this).animate({
            top: windowHeight + 200
        }, 800, 'easeInQuad', function() {
            $(this).hide();
        });
              flag ++;

      if (flag == 18){
            $('.brick-intro').animate({
                 top: windowHeight + 200 // move out of view
            }, 800, 'easeInQuad', function () {
        // Optional: remove or reset
        $(this).hide();
      });
      }
    });
});

// Helper function to get random elements from a jQuery collection
function getRandomElements(elements, count) {
    const shuffled = elements.toArray().sort(() => 0.5 - Math.random());
    return $(shuffled.slice(0, Math.min(count, shuffled.length)));
}





// $('.brick').on('click', function () {
//       const windowHeight = $(window).height();
//       const currentTop = $(this).offset().top;

//       $(this).animate({
//         top: windowHeight + 200 // move out of view
//       }, 800, 'easeInQuad', function () {
//         // Optional: remove or reset
//         $(this).hide();
//       });
//     });

});
