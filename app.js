var numbersArray = [];

var express = require('express');
var bodyParser = require('body-parser');

var app = express();

var port = 5000;

app.use(express.static('public'));
app.use(bodyParser.urlencoded({extended: true}));

app.get('/calculator', function(req, res){
    res.send(numbersArray);
});

app.post('/calculator', function(req, res) {
    console.log(req.body);
    
    numbersArray.push(req.body);
    res.sendStatus(201);
});

app.listen(port, function(){
    console.log('Listening on port', port);
});