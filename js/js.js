$(document).ready(function() {
    $('.slider').slick({
        dots: true,
        arrows: true
    });
});

// Resent post slider
$('.resent-post-slider').slick({
    arrows: true
});


// Post image slider 
$('.slider-post-image').slick({
    dots: true,
    arrows: false
});
// Calculation statistics
var time = 2;
cc = 1;
$(window).scroll(function() {
    $('#counter').each(function() {
        var cPos = $(this).offset().top,
            topWindow = $(window).scrollTop();
        if (cPos < topWindow + 500) {
            if (cc < 2) {
                $(".number").addClass('viz');
                $('h5').each(function() {
                    var
                        i = 1,
                        num = $(this).data('num'),
                        step = 100 * time / num,
                        that = $(this),
                        int = setInterval(function() {
                            if (i <= num) {
                                that.html(i);
                            } else {
                                cc = cc + 2;
                                cc
                                clearInterval(int);
                            }
                            i = i + 10;
                        }, step);
                });
            }
        }
    });
});



//Open popup
$(".enter-popup").click(function() {
    $(".popup").fadeIn();
});


//Close popup on click under window 
$(document).mouseup(function(e) {
    var popup = $(".popup");
    if (e.target != popup[0] && popup.has(e.target).length === 0) {
        $(".popup").fadeOut();
    }
});