$("#avatar").on("change", function() {
    switch($(this).val()) {
        case "joe-biden":
            $("#candidate-icon").attr("src", "images/Vector_Biden_Cropped.png");
            break;
        case "barack-obama":
            $("#candidate-icon").attr("src", "images/Vector_Obama_Cropped.png");
            break;
        case "jd-vance":
            $("#candidate-icon").attr("src", "images/Vector_Vance_Cropped.png");
            break;
    }
});