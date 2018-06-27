// HTML modularization functionality.
// Should be the last .js loaded on a page so other script callbacks will
// already be in scope.

// Original function courtesy of w3schools.com - W3.JS 1.02
function includeHTML() {
    var z, i, elmnt, file, xhttp, cb;
    z = document.getElementsByTagName("*");
    for (i = 0; i < z.length; i++) {
        elmnt = z[i];
        file = elmnt.getAttribute("html-include");
        // Read callback from HTML rather than passing it in like the original
        cb = window[elmnt.getAttribute("html-include-cb")];
        if (file) {
            xhttp = new XMLHttpRequest();
            xhttp.onreadystatechange = function () {
                if (this.readyState == 4 && this.status == 200) {
                    elmnt.innerHTML = this.responseText + elmnt.innerHTML;
                    elmnt.removeAttribute("html-include");
                    includeHTML();

                    // Move the callback here since we only want to call it if the module loaded successfully
                    if (cb) cb.apply(window, undefined);
                }
            }
            xhttp.open("GET", file, true);
            xhttp.send();
            return;
        }
    }
};

includeHTML();
