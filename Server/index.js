const express = require("express");
// connect to db
const mongoose = require("mongoose");

const cors = require("cors");
const morgan = require("morgan");
const EmployeeModel = require("./Models/Employee.jsx");

const app = express();

app.use(morgan("tiny"));
// transfers the data into json format
app.use(express.json());
app.use(cors());

// we want to post the data that we get into our db  0gjjmXM8XM43i913   daudalaramadan
// to do that we create a separate model inside another folder and file
// the model is like how we want our db to look like in our db
// ie like specifying the data types
app.post("/register", (req, res) => {
  console.log("REGISTERING...");
  EmployeeModel.create(req.body)
    .then((employees) => res.json(employees))
    .catch((err) => req.json(err));
});

// creates a connecttion with the db
mongoose.connect("mongodb://localhost:27017/employee").then(() => {
  console.info("Successfully connected to the Database.");
});
const Port = 3004;
app.listen(Port, () => {
  console.log("server is running on: ", Port);
});
