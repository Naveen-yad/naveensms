const { request, response } = require("express");
const express = require("express");
var mongoose = require("mongoose");
const router = express.Router();
var Course = require('../models/Course.js');
router.post('/CourseAdd',(request,response) => {
  console.log("request",request);
  const user = new Course({
    CourseID: request.body.CourseID,
  CourseName: request.body.CourseName,
  DeptID: request.body.DeptID
  });
user.save().then(success=> {
  console.log("Successfully created a new course", success);
  var obj = {
    "statusCode": 200,
    "message": "successfully created a new course",
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