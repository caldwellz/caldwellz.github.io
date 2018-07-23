/*
 * Contains general site-wide functionalities
 */

"use strict";
var zc = {};
zc.activeClass = "active";

zc.loadModules = function () {
    $("link[rel='preload']").each(function () {
        var elem = $(this);
        var modURL = elem.attr("href");
        var xhttp = new XMLHttpRequest();
        xhttp.responseType = "text";
        xhttp.onreadystatechange = function () {
            if (this.readyState === 4 && this.status === 200) {
                // Assume all modules are wrapped in <template>, so get only the stuff inside
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
