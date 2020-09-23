//Imported required packages
const express = require("express");
const bodyparser = require("body-parser");
const core = require("cors");
const path = require("path");
const mongoose = require("mongoose");

//Mongodb Url

var mongoose__Url =
  "mongodb://admin:OHhVZwlzMapIb4bR@cluster0-shard-00-00.kc359.mongodb.net:27017,cluster0-shard-00-01.kc359.mongodb.net:27017,cluster0-shard-00-02.kc359.mongodb.net:27017/curd?ssl=true&replicaSet=atlas-143rmj-shard-0&authSource=admin&retryWrites=true&w=majority";

// connect mongodb  
mongoose.connect(mongoose__Url, { useNewUrlParser: true }).then(
  () => {
    console.log("Database is connected");
  },
  (err) => {
    console.log("There is a problem" + err);
  }
);
const app = express();
app.use(bodyparser.json());
app.use(core());

//setup  for the server port number

const port = process.env.PORT || 4000;

// Starting our express server

const server = app.listen(port, () => {
  console.log("Server Listen On Port : " + `${port}`);
});
