let menuDropdown = new Boolean;
menuDropdown = false;

$("#mobile-menubar-button").click(function() {
    if (!menuDropdown) {
        $("#mobile-menubar-links").show();
        menuDropdown = true;
    } else {
        $("#mobile-menubar-links").hide();
        menuDropdown = false;
    }
});