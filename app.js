var express = require('express');

var bodyParser = require('body-parser');

var app = express();

var port = 5000;

app.use(express.static('public'));
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/math', function (req, res) {
    res.send(response)
})

app.post('/math', function (req, res) {
    res.sendStatus(201);
})

app.listen(port, function (req, res) {
    console.log('Listening to port', port);
});