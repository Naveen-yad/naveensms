const mongoose = require('mongoose');
const StudentSchema = mongoose.Schema({
  StudentID:{type:String},
  FristName: {type:String},
  LastName: {type:String},
  DOB: {type:String},
  // JOY: {type:String},
  Semester: {type:String},
  Gender: {type:String},
  Address: {type:String},
  DeptID: {type:String},
  Status: {type:String},
  Phone: {type:String}
})
module.exports = mongoose.model('Student',StudentSchema);