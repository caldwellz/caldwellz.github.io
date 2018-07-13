/*
 * Contains general site-wide functionalities
 */

"use strict";
var zc = {};

zc.loadModules = function () {
    var importsSupported;
    if ('import' in document.createElement('link')) {
        // HTML Imports are supported, set a flag
        importsSupported = true;
    } else {
        importsSupported = false;
    }

    $("link[rel='import']").each(function () {
        var elem = $(this);
        // Links in imports are processed (like stylesheets), but HTML tags aren't automatically embedded, so do that
        if (importsSupported) {
            var content = elem.import;
           // if (content)
                elem.append(content);
        }
        // Do it the manual way if no imports
        else {
            var modURL = elem.attr("href");
            var xhttp = new XMLHttpRequest();
            xhttp.onreadystatechange = function () {
                if (this.readyState === 4 && this.status === 200) {
                    elem.after(this.responseText);
                }
            };
            xhttp.open("GET", modURL, false);
            xhttp.send();
        }
    });
};

zc.toggleBurger = function () {
    $("nav > a").toggleClass("responsive");
};

zc.wayfind = function () {
    // Will need modification to support links using anything other than a plain filename reference, but shouldn't be too hard
    // TODO: Use foreach() to test .endsWith(page) on all nav hrefs
    var pageURLComponents = window.location.pathname.split('/');
    var page = pageURLComponents[pageURLComponents.length - 1];
    var elem = $("nav a[href='" + page + "']");
    if (elem) {
        elem.addClass("current");
    }
}

function loadServicesTable() {
/*
    request.onload = function () {
       var response = request.response;
       $.each(response.services, function(i, item) {
          var tr = $("<tr>").append(
          $("<td>").text(item.name),
          $("<td>").text('$' + item.price.toFixed(2)));
          $("table").append(tr);
       });
   }
*/
}
