'use strict';

var express = require('express');
var app = express();
var bodyparser = require('body-parser');
var adjective = require('./lib/adjective.js');
var randomWord = require('./lib/randomWord.js');

var newAdjactive = new adjective();

app.use(bodyparser.json());
app.use(bodyparser.urlencoded({
    extended: true
}));

app.set('port', (process.env.PORT || 5000));
app.use(express.static(__dirname + '/public'));

var quotes = [
    "I have not failed. Ive just found 10,000 ways that wont work. - Thomas Edison.",
    "No matter where you go, there you are. ",
    "If it is a good idea, go ahead and do it. It is much easier to apologize than to get permission. - Rear Admiral Grace Hopper, USN, Ph.D"
];

var verbs = function() {
    this.fast = true;
    this.sad = true;
    this.soft = true;
    this.tall = true;
    this.round = true;
    this.long = true;
    this.coward = true;
    this.beautifull = true;
    this.bright = true;
};

var newVerb = new verbs();

var nouns = function() {
    this.city = true;
    this.cow = true;
    this.dog = true;
    this.car = true;
    this.bob = true;
    this.seattle = true;
    this.couch = true;
    this.cup = true;
    this.ball = true;
    this.bed = true;
    this.computer = true;
};

var newNoun = new nouns();

var newAdjactive = new adjective();

app.get("/quote", function (req, res){
    var randomIndex =
        Math.floor(Math.random()*quotes.length);
    res.send(quotes[randomIndex]); });

app.get('/adjective', function(req, res) {
    res.json(randomWord(newAdjactive));
});

app.get("/verbs", function (req, res){
    res.json(randomWord(newVerb)); 
});

app.get("/nouns", function (req, res){
    res.json(randomWord(newNoun));
});

app.get('/*', function(req, res) {
    res.status(404).send('could not find page');
});

app.listen(app.get('port'), function() {
    console.log("Node app is running at localhost:" + app.get('port'));
});