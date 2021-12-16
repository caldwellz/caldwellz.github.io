/*
 * Contains general site-wide functionalities
 */

"use strict";
var zc = {};
zc.activeClass = "active";
zc.infoObfuscated = true;

zc.loadModules = function () {
    $("link[rel='prefetch']").each(function () {
        var elem = $(this);
        var modURL = elem.attr("href");
        var xhttp = new XMLHttpRequest();
        xhttp.responseType = "text";
        xhttp.onreadystatechange = function () {
            if (this.readyState === 4 && this.status === 200) {
                elem.after(this.responseText);
            }
        };
        xhttp.open("GET", modURL);
        xhttp.send();
    });
};

zc.toggleBurger = function () {
    $("nav > a").toggleClass("responsive");
};

zc.activateParent = function (obj) {
    var objParent = $(obj).parent();
    objParent.addClass(zc.activeClass);
}

zc.toggleParent = function (obj) {
    var objParent = $(obj).parent();
    objParent.toggleClass(zc.activeClass);
}

zc.toggleParentUnique = function (obj, instanceClass) {
    var parent = $(obj).parent();

    // Deactivate if already active
    if (parent.hasClass(zc.activeClass)) {
        parent.removeClass(zc.activeClass);
        return;
    }
    // Otherwise, deactivate any other instances and make this one uniquely active
    else {
        $('.' + instanceClass).each(function(i, instance) {
            $(instance).removeClass(zc.activeClass);
        });
        parent.addClass(zc.activeClass);
    }
}

zc.countClass = function (className) {
    var count = 0;
    $('.' + className).each(function(i, instance) {
        count++;
    });
    return count;
}

zc.wayfind = function () {
    // Will need modification to support links using anything other than a plain filename reference, but shouldn't be too hard
    // TODO: Use foreach() to test .endsWith(page) on all nav hrefs
    var pageURLComponents = window.location.pathname.split('/');
    var page = pageURLComponents[pageURLComponents.length - 1];
    var elem = $("a[href='" + page + "']");
    if (elem) {
        elem.addClass("current");
    }
}

// Original from http://jsfromhell.com/string/rot13
// Modified to rotate numbers as well.
String.prototype.rot13 = function(){
    return this.replace(/[a-zA-Z]/g, function(c){
        return String.fromCharCode((c <= "Z" ? 90 : 122) >= (c = c.charCodeAt(0) + 13) ? c : c - 26);
    }).replace(/[0-9]/g, function(c){
        return String.fromCharCode(57 >= (c = c.charCodeAt(0) + 5) ? c : c - 10);
    });
};

// Use basic info obfuscation that requires both a mouseover
// and a click, to help prevent automated spambots from
// scraping my info from the page source.
// TODO: Find a better event; I don't know if screen readers for the visually impaired trigger mouseovers
zc.toggleObfuscation = function() {
    if (zc.allowDecipher) {
        $(".obfuscate").html($(".obfuscate").html().rot13());
        zc.infoObfuscated = !zc.infoObfuscated;
    }
};

zc.setAllowDecipher = function() {
    zc.allowDecipher = true;
}

zc.revealContactInfo = function(obj) {
    zc.toggleParentUnique(obj, 'accordion-item');
    zc.toggleObfuscation();
};
