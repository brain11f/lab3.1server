'use strict';

var express = require('express');
var app = express();

app.set('port', (process.env.PORT || 5000));
app.use(express.static(__dirname + '/public'));

var quotes = [
    "I have not failed. Ive just found 10,000 ways that wont work. - Thomas Edison.",
    "No matter where you go, there you are. ",
    "If it is a good idea, go ahead and do it. It is much easier to apologize than to get permission. - Rear Admiral Grace Hopper, USN, Ph.D"
];

var verbs = ["fast","sad","soft","tall","round","long","coward","beautifull","bright"];

var nouns = ["city","cow","dog","car","bob","seattle","couch","cup","ball","bed","computer"];

app.get("/quote", function (req, res){
    var randomIndex =
        Math.floor(Math.random()*quotes.length);
    res.send(quotes[randomIndex]); });

app.get("/virb", function (req, res){
    var randomIndex =
        Math.floor(Math.random()*verbs.length);
    res.send(verbs[randomIndex]); });

app.get("/noun", function (req, res){
    var randomIndex =
        Math.floor(Math.random()*nouns.length);
    res.send(nouns[randomIndex]); });

app.get('/*', function(req, res) {
    res.status(404).send('could not find page');
});

app.listen(app.get('port'), function() {
    console.log("Node app is running at localhost:" + app.get('port'));
});