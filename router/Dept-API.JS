const { request, response } = require("express");
const express = require("express");
var mongoose = require("mongoose");
const router = express.Router();
var Dept = require('../models/Dept.js');
router.post('/DeptAdd',(request,response) => {
  console.log("request",request);
  const user = new Dept({
    DeptID: request.body.DeptID,
    DeptName: request.body.DeptName,
    DeptIntake: request.body.DeptIntake,
  });
user.save().then(success => {
  console.log("Successfully created a new Dept", success);
  var obj = {
    "statusCode": 200,
    "message": "successfully created a new Dept",
    "record": success
  };
  response.send(obj);
  }) .catch(error => {
    var obj = {
      "statusCode": 500,
      "message": error
    };
  response.send(obj);
  })
});

module.exports = router;