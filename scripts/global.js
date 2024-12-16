let menuDropdown = new Boolean;
menuDropdown = false;

$("#mobile-menubar-button").click(function() {
    if (!menuDropdown) {
        $("#mobile-menubar-links").show();
        menuDropdown = true;
        $("#mobile-menubar-button").html("Close Menu");
    } else {
        $("#mobile-menubar-links").hide();
        menuDropdown = false;
        $("#mobile-menubar-button").html("Open Menu");
    }
});