// Perform wayfinding highlighting
function navWayfind() {
    var pageName = document.getElementsByClassName("page-title")[0].textContent.toLowerCase();
    var navBar = document.getElementsByClassName("navigation")[0];

    // Loop through nav links and see which matches page title
    for (i = 0; i < navBar.children.length; ++i) {
        elem = navBar.children[i];
        // Could do a straight equal test, except several pages
        // have a longer page header title than navbar title
        if (pageName.includes(elem.textContent.toLowerCase())) {
            elem.style.backgroundColor = "#666666";
            return;
        }
    }
}
