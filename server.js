//require depenciess
var express = require('express');
var router = require('./routes');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
const config = require ('./config/database');
var DB_URI = "mongodb://localhost:27017/meanauth";

//On Connection
mongoose.connection.on('connected', () =>
{
  console.log('Connected to database '+config.database);
});

// On Error
mongoose.connection.on('error', (err) =>
{
  console.log('Database error '+err);
});

var app = express();

app.set('view engine', 'ejs');

// configure app
app.use(bodyParser.urlencoded({extended:false}));
app.use(express.static(__dirname+ '/public'));

mongoose.connect(DB_URI);
app.use(router);


// start the server
app.listen(8080, function(){
    console.log("server is listening on port 8080");
})
