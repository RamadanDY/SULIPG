const mongoose = require("mongoose")
// lets now create the schemma 
const EmployeeSchema = new mongoose.Schema({
    name: { type: String, required: true,maxlength: 50,match: /^[A-Za-z]+$/},
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
})
// this code creates an employees schema called employees and a table named EmployeeSchema
// note that the table name is what we specified as a func above so it should be the same name
const EmployeeModel = mongoose.model('employees', EmployeeSchema)
// now lets export it into our serverApp ie index.js
module.exports = EmployeeModel;