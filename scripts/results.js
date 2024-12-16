var result, chanceNum = (Math.round(Math.random()));

if (chanceNum == 1) {
    result = false;
} else {
    result = true;
}

console.log(result);

if (result) {
    $("#result-display").html("Won");
    $("#results").css("background-color", "#15429A");
    $("#result-display").css("color", "#15429A");
    $("#result-display-continued").html("...the vote! Read the info below to find out who\'s responsible for this.");
    $("#second-result h1").html("62%");
    $("#second-result-text h2").html("of people voted for you. It\'s enough to win an election, but not enough to get everyone to like you.");
    $("#entry-one").html("Jessica W. from Idaho voted for you because she\'s your mother, and not voting for your own child is just messed up.");
    $("#entry-two").html("Theo L. from California didn\'t vote for you because he forgot where the polling place was.");
    $("#entry-three").html("Laika P. from North Dakota liked your stance on social issues, not because she agreed with them but because she wanted to spite her neighbor, who has the opposing view.");
}