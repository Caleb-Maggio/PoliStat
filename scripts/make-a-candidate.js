$("#avatar").on("change", function() {
    switch($(this).val()) {
        case "none":
            $("#candidate-icon").attr("src", "images/blank_avatar.png");
            break;
        case "joe-biden":
            $("#candidate-icon").attr("src", "images/Vector_Biden_Cropped.png");
            break;
        case "kamala-harris":
            $("#candidate-icon").attr("src", "images/Vector_Kamala_Cropped.png");
            break;
        case "barack-obama":
            $("#candidate-icon").attr("src", "images/Vector_Obama_Cropped.png");
            break;
        case "donald-trump":
            $("#candidate-icon").attr("src", "images/Vector_Trump_Cropped.png");
            break;
        case "jd-vance":
            $("#candidate-icon").attr("src", "images/Vector_Vance_Cropped.png");
            break;
        case "jimmy-carter":
            $("#candidate-icon").attr("src", "images/Vector_Carter_Cropped.png");
            break;
        case "alex-jones":
            $("#candidate-icon").attr("src", "images/Vector_Jones_Cropped.png");
            break;
    }
});