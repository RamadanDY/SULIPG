const express = require("express");
// connect to db
const mongoose = require("mongoose");

const cors = require("cors");

const app = express();
// transfers the data into json format
app.use(express.json());
app.use(cors());

mongoose.connect("mongodb://localhost:27017/employee");
const Port = 3004;
app.listen(Port, () => {
  console.log("server is running on: ", Port);
});
