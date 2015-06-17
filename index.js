'use strict'

var express = require('express');
var app = express();
var bodyparser = require('body-parser');
var adjective = require('./lib/adjective.js');
var verbs = require('./lib/verbs.js');
var nouns = require('./lib/nouns.js');
var randomWord = require('./lib/randomWord.js'); 
var postRandomWord = require('./lib/postRandomWord.js');
var Gruntfile = require('./Gruntfile.js');

var newAdjactive = new adjective();

app.use(bodyparser.json());
app.use(bodyparser.urlencoded({
  extended: true
}));

app.set('port', (process.env.PORT || 5000));
app.use(express.static(__dirname + '/public'));

var newVerb = new verbs();

var newNoun = new nouns();

var newAdjactive = new adjective();

app.get('/', function(req, res) {
  res.sendFile('index.html')		
})

app.get('/adjective', function(req, res) {
  res.json(randomWord(newAdjactive));
});

app.get("/verbs", function (req, res){
  res.json(randomWord(newVerb)); 
});

app.get("/nouns", function(req, res){
  res.json(randomWord(newNoun));
});

app.post('/adjective', function(req, res) {
  var word = postRandomWord(req.body.word, newAdjactive); 
  console.log(req.body);
  res.json(word);
});

app.post('/verbs', function(req, res) {
  var word = postRandomWord(req.body.word, newVerb); 
  console.log(req.body);
  res.json(word);
});

app.post('/nouns', function(req, res) {
  var word = postRandomWord(req.body.word, newNoun); 
  console.log(req.body);
  res.json(word);
});

app.get('/*', function(req, res) {
  res.status(404).send('could not find page');
});

app.listen(app.get('port'), function() {
  console.log("Node app is running at localhost:" + app.get('port'));
});