//Require statements
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

//Defining the employeeSchema. (First and Last Name)
let EmployeeSchema = new Schema({
    firstName: { type: String, required: true, unique: true},
    lastName: {type: String, required: true, unique: true},
});

//Defining the model
var Employee = mongoose.model("Employee", EmployeeSchema);

//Exporting module.
module.exports = Employee;
module.exports = mongoose.model('Employee', EmployeeSchema)