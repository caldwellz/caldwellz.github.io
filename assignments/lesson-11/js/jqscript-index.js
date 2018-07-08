
$(document).ready(function(){
    // Logo opacity
    $("#alcoveLogo").css({"opacity":0.4});

    // Button coloring
    $(".servicesBtn").css("color", "white");
    $("button").css("border", "1px solid red");
/*
    // Header2 styling
    $("h2").css({
        "borderColor":"red",
        "borderWidth":"1px",
        "borderStyle":"solid"
    })
*/
    // Form styling
    $("input[name!='phoneNum']").css("border", "1px solid red");

    var nameVal = $('input[name="nameVal"]');
    function FillEmpty(){
        if(nameVal.val() == '') {
            nameVal.val( 'John Doe' );
        }
    }
    $('#ReqAQuoteBtn').click(FillEmpty);

//    $('.servicesBtn').closest('div').css('background-color', 'rgba(255, 0, 0, 0.2)');

    var toggleStyle = function() {
        var logo = $("input[type='text']");
        if(logo.css("background-color") == "rgb(255, 0, 0)") {
            logo.css("background-color", "white");
        } else {
            logo.css("background-color", "red");
        }
    }
    $('#ReqAQuoteBtn').click(toggleStyle);

    $('.coreValues').prepend('<li><strong>This is brand new !!</strong></li>');
    $("<li><strong>This is also great !!</strong></li>").prependTo(".coreValues");


})
