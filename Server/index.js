const express = require("express");
// connect to db
const mongoose = require("mongoose");

const cors = require("cors");
const EmployeeModel = require("./Models/Employee.jsx");

const app = express();
// transfers the data into json format
app.use(express.json());
app.use(cors());

// we want to post the data that we get into our db
// to do that we create a separate model inside another folder and file
// the model is like how we want our db to look like in our db
// ie like specifying the data types
app.post("/register", (req, res) => {
  EmployeeModel.create(req.body)
    .then((employees) => res.json(employees))
    .catch((err) => req.json(err));
});

// creates a connecttion with the db
mongoose.connect("mongodb://localhost:27017/employee");
const Port = 3004;
app.listen(Port, () => {
  console.log("server is running on: ", Port);
});
