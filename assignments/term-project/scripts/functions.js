/*
 * Contains general site-wide functionalities such as modularization
 */

var zc = {};

zc.loadModules = function() {
    if ('import' in document.createElement('link')) {
        // HTML Imports are supported, we're good to go
        return;
    }

    // Otherwise, do it the manual way
    $("link[rel='import']").each(function() {
        var elem = $(this);
        var modURL = $(this).attr("href");
        xhttp = new XMLHttpRequest();
        xhttp.onreadystatechange = function() {
            if (this.readyState === 4 && this.status === 200) {
                elem.after(this.responseText);
            }
        };
        xhttp.open("GET", modURL, true);
        xhttp.send();
    });
};
