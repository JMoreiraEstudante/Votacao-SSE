'use strict'
require('dotenv').config()

// Import DB Connection
require("./config/db");

// require express and bodyParser
const express = require("express");

// create express app
const app = express();

// define port to run express app
const port = process.env.PORT || 3001;

// use bodyParser equivalent middleware on express app
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//avoid CORS
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Methods", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

// Import API route
var routes = require('./api/routes/route'); //importing route
routes(app);

app.get("/", (req, res) => res.sendFile("index.html", { root: __dirname }));

app.listen(port, () => console.log(`Listening on ${port}`));