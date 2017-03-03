const express = require ('express');
//const router = express.Router();
const router = require('./routes.js');
const path = require ('path');
const bodyParser = require ('body-parser');
const mongoose = require ('mongoose');
const config = require ('./config/database');
var db = 'mongodb://localhost:27017/meanauth';

// Connect To Database
mongoose.connect(db);

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

const app = express();
app.use(router);

//View Engine
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

//Port Number
const port = 3000;

//Set Static Folder
app.use(express.static(path.join(__dirname, 'public')));

// Body Parser Middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

//Start Server
app.listen(port, () =>
{
  console.log('Server started on port '+port);
})
