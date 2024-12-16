$("#avatar").on("change", function() {
    switch($(this).val()) {
        case "none":
            $("#candidate-icon").attr("src", "images/blank_avatar.png");
            $("#candidate-icon").attr("alt", "A blank, grey outline of a person. Could this be someone we\'ve seen before...?");
            break;
        case "joe-biden":
            $("#candidate-icon").attr("src", "images/Vector_Biden_Cropped.png");
            $("#candidate-icon").attr("alt", "An angular, vectorized characture of U.S. President Joseph Biden, wistfully gazing off to his right side.");
            break;
        case "kamala-harris":
            $("#candidate-icon").attr("src", "images/Vector_Kamala_Cropped.png");
            $("#candidate-icon").attr("alt", "An angular, vectorized characture of U.S. Vice President Kamala Harris, looking to her left with a puzzled expression.");
            break;
        case "barack-obama":
            $("#candidate-icon").attr("src", "images/Vector_Obama_Cropped.png");
            $("#candidate-icon").attr("alt", "An angular, vectorized characture of former U.S. President Barack Obama, looking forward with a muted expression on his face.");
            break;
        case "donald-trump":
            $("#candidate-icon").attr("src", "images/Vector_Trump_Cropped.png");
            $("#candidate-icon").attr("alt", "An image of U.S. Preisdent-Elect Donald Trump, wearing a cheezy grin and giving two thumbs up, Roger and Ebert style.");
            break;
        case "jd-vance":
            $("#candidate-icon").attr("src", "images/Vector_Vance_Cropped.png");
            $("#candidate-icon").attr("alt", "An angular, vectorized characature of U.S. vice-president-elect JD Vance, looking at his right side with a pensive expression.");
            break;
        case "jimmy-carter":
            $("#candidate-icon").attr("src", "images/Vector_Carter_Cropped.png");
            $("#candidate-icon").attr("alt", "An angular, vectorized characature of Former U.S. President Jimmy Carter, looking forward with a muted, yet confident expression.");
            break;
        case "alex-jones":
            $("#candidate-icon").attr("src", "images/Vector_Jones_Cropped.png");
            $("#candidate-icon").attr("alt", "An angular, vectorized of far-right conspiracy theorist Alex Jones, screaming his head off at you. His face is wrinkled, and his eyes are wide and bloodshot.");
            break;
    }
});