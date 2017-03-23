'use strict';

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _morgan = require('morgan');

var _morgan2 = _interopRequireDefault(_morgan);

var _bodyParser = require('body-parser');

var _bodyParser2 = _interopRequireDefault(_bodyParser);

var _mongoose = require('mongoose');

var _mongoose2 = _interopRequireDefault(_mongoose);

var _methodOverride = require('method-override');

var _methodOverride2 = _interopRequireDefault(_methodOverride);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var app = (0, _express2.default)();


//========================
//APP CONFIG
//========================
//set ejs templating engine
app.set('view engine', 'ejs');
//set public directory for static assets
app.use(_express2.default.static('public'));
//use bodyParser to get values from forms
app.use(_bodyParser2.default.urlencoded({ extended: true }));
//use method-override to update form methods
app.use((0, _methodOverride2.default)("_method"));
//log requests to the console
app.use((0, _morgan2.default)('combined'));

//========================
//DB SET UP
//========================
//Connect to mongoose
//mongoose.connect('mongodb://localhost/insertappnamehere');

//========================
//ROUTES
//========================
//Index route
app.get('/', function (req, res) {
  res.render("index");
});

//========================
//ROUTES
//========================
//Set up and run server
var port = process.env.PORT || 8080;
app.listen(port, function () {
  console.log('Looks like we\'re cooking on port ' + port);
});