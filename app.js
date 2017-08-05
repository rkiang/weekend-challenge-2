var express = require('express');

var bodyParser = require('body-parser');

var app = express();

var port = 5000;

app.use()

app.use(express.static('public'));
app.use(bodyParser.urlencoded({extended: true}));

app.listen(port, function(req, res){
    console.log('Listening to port', port);
});