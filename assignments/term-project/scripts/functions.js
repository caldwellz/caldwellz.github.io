/*
 * Contains general site-wide functionalities
 */

"use strict";
var zc = {};

zc.loadModules = function () {
    if ('import' in document.createElement('link')) {
        // HTML Imports are supported, we're good to go
        return;
    }

    // Otherwise, do it the manual way
    $("link[rel='import']").each(function () {
        var elem = $(this);
        var modURL = elem.attr("href");
        var xhttp = new XMLHttpRequest();
        xhttp.onreadystatechange = function () {
            if (this.readyState === 4 && this.status === 200) {
                elem.after(this.responseText);
            }
        };
        xhttp.open("GET", modURL, false);
        xhttp.send();
    });
};

zc.toggleBurger = function () {
    $("nav > a").toggleClass("responsive");
};

zc.wayfind = function () {
    // Will need modification to support links using anything other than a plain filename reference, but shouldn't be too hard
    var pageURLComponents = window.location.pathname.split('/');
    var page = pageURLComponents[pageURLComponents.length - 1];
    var elem = $("nav a[href='" + page + "']");
    if (elem) {
        elem.addClass("current");
    }
}
