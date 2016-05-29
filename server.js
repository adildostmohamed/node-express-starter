var express = require('express');
var app = express();
var mongoose = require('mongoose');
var bodyParser = require('body-parser');
var morgan = require('morgan');
var methodOverride = require('method-override');

//APP CONFIG
//set ejs templating engine
app.set('view engine', 'ejs');
//set public directory for static assets
app.use(express.static('public'));
//make a static path to reference js files held in node_modules directory
app.use('/scripts/vendor', express.static(__dirname + '/node_modules/'));
//make a static path to reference css files in node_modules directory
app.use('/css/vendor', express.static(__dirname + '/node_modules/'));
//use bodyParser to get values from forms
app.use(bodyParser.urlencoded({extended: true}));
//use method-override to update form methods
app.use(methodOverride("_method"));
//log requests to the console
app.use(morgan('dev'));


//DB SET UP
//Connect to mongoose
//mongoose.connect('mongodb://localhost/insertappnamehere');

//SET UP ROUTES
//Home route
app.get('/', function(req, res) {
  res.render("home");
});

//SET PORT AND RUN SERVER
var port = process.env.PORT || 8080;
app.listen(port);
console.log("Looks like we're cooking on port " + port);
