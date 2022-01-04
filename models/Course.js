const mongoose = require ('mongoose');
const CourseSchema = mongoose.Schema({
  CourseID:{type:String},
  CourseName:{type: String},
  DeptID:{type: String}
})
module.exports = mongoose.model('Course',CourseSchema);