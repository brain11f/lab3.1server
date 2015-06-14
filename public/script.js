$(function() {
    
    $('#quote').on('click', function() {
        event.preventDefault();
        $.get("http://localhost:5000/quote", function (response) {
            $("#theQuote").text(response);
        });
    });
    
    $('#verbNoun').on('click', function() {
        event.preventDefault();
        $.get("http://localhost:5000/virb", function (response) {
            $("#theVerb").text(response);
        });
        $.get("http://localhost:5000/noun", function (response) {
            $("#theNoun").text(response);
        });
    });
});