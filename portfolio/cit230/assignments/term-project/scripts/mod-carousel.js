// Controls the image carousel
"use strict";

var numImages = 3;
$(".hidden").each(function(i, instance) {
    $(instance).css({"opacity": '0'});
});

function swapImage() {
    var currentImg = $('.' + zc.activeClass);
    var nextImgNum = (Number(currentImg.attr("id").slice(-1)) + 1) % numImages;
    var nextImg = $("#carousel-img" + nextImgNum.toString());
    // Works better with initial state to just animate in CSS
    currentImg.animate({opacity: '0'}, 500);
    currentImg.hide();
    currentImg.removeClass(zc.activeClass);
    nextImg.addClass(zc.activeClass);
    nextImg.show();
    nextImg.removeClass("hidden");
    nextImg.animate({opacity: '1'}, 500);
    window.setTimeout(swapImage, 4000);
}

window.setTimeout(swapImage, 4000);
