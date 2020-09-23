//Imported required packages
const express = require("express");
const bodyparser = require("body-parser");
const core = require("cors");
const path = require("path");
const mongoose = require("mongoose");

//Mongodb Url

var mongoose__Url = "";

const app = express();
app.use(bodyparser.json());
app.use(core());

//setup  for the server port number

const port = process.env.PORT || 4000;

// Starting our express server

const server = app.listen(port, () => {
  console.log("Server Listen On Port : " + `${port}`);
});
