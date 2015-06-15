$(function() {
    
    $('#quote').on('click', function() {
        event.preventDefault();
        $.get("http://localhost:5000/quote", function (response) {
            $("#theQuote").text(response);
        });
    });
    
    $('#verbNoun').on('click', function() {
        $.get("/adjective", function(response) {
            var adjective = response.word;
            $("#theAdjective").text(adjective);
        });
        $.get("/verbs", function (response) {
            var verbs = response.word;
            $("#theVerb").text(verbs);
        });
        $.get("/nouns", function (response) {
            var nouns = response.word;
            $("#theNoun").text(nouns);
        });
    });
});