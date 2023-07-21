// Create web server

// Import module
var express = require('express');
var bodyParser = require('body-parser');
var path = require('path');
var app = express();

// Set port
var port = 8080;

// Set static folder
app.use(express.static(path.join(__dirname, 'public')));

// Body parser middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

// Set route
app.get('/', function(req, res) {
	res.send('Hello world');
});

// Listen port
app.listen(port, function() {
	console.log('Server started on port ' + port);
});