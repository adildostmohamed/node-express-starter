import express from 'express';
const app = express();
import morgan from 'morgan';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import methodOverride from 'method-override';

//========================
//APP CONFIG
//========================
//set ejs templating engine
app.set('view engine', 'ejs');
//set public directory for static assets
app.use(express.static('public'));
//use bodyParser to get values from forms
app.use(bodyParser.urlencoded({extended: true}));
//use method-override to update form methods
app.use(methodOverride("_method"));
//log requests to the console
app.use(morgan('combined'));


//========================
//DB SET UP
//========================
//Connect to mongoose
//mongoose.connect('mongodb://localhost/insertappnamehere');

//========================
//ROUTES
//========================
//Index route
app.get('/', (req, res) => {
  res.render("index");
});

//========================
//ROUTES
//========================
//Set up and run server
const port = process.env.PORT || 8080;
app.listen(port, () => {
  console.log(`Looks like we're cooking on port ${port}`);
});
