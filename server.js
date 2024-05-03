const express = require("express");
const app = express();
require("dotenv").config();
const port = process.env.PORT;
const morgan = require("morgan");
const colors = require("colors");
const crypto = require("crypto");
const { append } = require("express/lib/response");
const products = require("./models/products");

//Middleware...
app.use(express.json());
app.use(morgan("dev")); //Developer loggers

//Routes...

//Port listerner....
app.listen(port, () => {
  console.log(`Server is running on ${port}....`.inverse.blue);
});
