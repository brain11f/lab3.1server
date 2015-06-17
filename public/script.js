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
    
    $("#submitAdjective").on("submit", function(e) {
         e.preventDefault();
            var adjective = $("[name=verbs]").val();
            var adjPost;
            if (adjective) {
                adjPost = {word: adjective};
                $.post("adjective", adjPost, function(response) {
                        console.log('response');
                        var adjectiveRes = response.msg;
                        $("#adjRes").text(adjectiveRes);
          })
        }
    });
    
    $("#submitVerbs").on("submit", function(e) {
        e.preventDefault();
        var verbs = $("[name=adjective]").val();
        var verbPost;
        if (verbs) {
            verbPost = {word: verbs};
            $.post("verbs", verbPost, function(response) {
                console.log('response');
                var verbsRes = response.msg;
                $("#adjRes").text(verbsRes);
            })
        }
    });
    
    $("#submitNouns").on("submit", function(e) {
        e.preventDefault();
        var nouns = $("[name=nouns]").val();
        var nounPost;
        if (nouns) {
            nounPost = {word: nouns};
            $.post("nouns", nounPost, function(response) {
                console.log('response');
                var nounsRes = response.msg;
                $("#adjRes").text(nounsRes);
            })
        }
    });
});