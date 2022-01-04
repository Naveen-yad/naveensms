const mongoose = require('mongoose');
const DeptSchema = mongoose.Schema({
  DeptID: { type: String},
  DeptName: { type: String},
  DeptIntake: {type: String}
})
module.exports = mongoose.model('Dept',DeptSchema);