//Require statements
var mongoose = require("mongoose");
var Schema = mongoose.Schema;

//Defining the employeeSchema. (First and Last Name)
var EmployeeSchema = new Schema({
    firstName: { type: String, required: true, unique: true},
    lastName: {type: String, required: true, unique: true},
});

//Defining the model
var Employee = mongoose.model("Employee", EmployeeSchema);

//Exporting module.
module.exports = Employee;