const mongoose = require('mongoose');
const MarksSchema = mongoose.Schema({
  StudentID:{type:String},
  Semester:{type:String},
  CourseName:{type:String},
  CourseID:{type:String},
  Marks:{type:String}
})
module.exports = mongoose.model('Mark',MarksSchema);