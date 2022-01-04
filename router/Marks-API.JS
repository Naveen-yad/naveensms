const { request, response } = require("express");
const express = require("express");
var mongoose = require("mongoose");
const router = express.Router();
var Marks = require('../models/Mark.js');
router.post('/MarksAdd',(request,response) => {
  console.log("request",request);
  const user = new Marks({
    StudentID: request.body.StudentID,
  Semester: request.body.Semester,
  CourseName: request.body.CourseName,
  CourseID: request.body.CourseID,
  Marks: request.body.Marks
  });
user.save().then(success => {
  console.log("Successfully added the marks", success);
  var obj = {
    "statusCode": 200,
    "message": "successfully added the marks",
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

router.post('/getCourseMarkslist', (request, response) => {
  Marks
    .findOne({CourseID:request.body.CourseID})
    .lean()
    .exec()
    .then(function (success) {
      if (success) {
        let obj = {
          "statuscode": 200,
          "message": "successfully getting the  course marks details",
          "record": success
        }
        response.status(200).send(obj);
      }
    })
    .catch(function (error) {
      let obj = {
        "statuscode": 500,
        "message": error
      };
      response.status(500).send(obj);
    });
});
 

router.get('/getStudentMarksList', (request, response) => {
  Marks  
    .findOne()
    .lean()
    .exec()
    .then(function (success) {
      if (success) {
        let obj = {
          "statuscode": 200,
          "message": "successfully getting the Student details",
          "record": success
        }
        response.status(200).send(obj);
      }
    })
    .catch(function (error) {
      let obj = {
        "statuscode": 500,
        "message": error
      };
      response.status(500).send(obj);
    });
});

router.post('/getSemesterMarksList', (request, response) => {
  Marks  
    .find({Semester:request.body.Semester})
    .lean()
    .exec()
    .then(function (success) {
      if (success) {
        let obj = {
          "statuscode": 200,
          "message": "successfully getting the Semester details",
          "record": success
        }
        response.status(200).send(obj);
      }
    })
    .catch(function (error) {
      let obj = {
        "statuscode": 500,
        "message": error
      };
      response.status(500).send(obj);
    });
});

router.post('/getindividualList', (request, response) => {
  Marks  
    .find({StudentID:request.body.StudentID})
    .lean()
    .exec()
    .then(function (success) {
      if (success) {
        let obj = {
          "statuscode": 200,
          "message": "successfully getting the Semester details",
          "record": success
        }
        response.status(200).send(obj);
      }
    })
    .catch(function (error) {
      let obj = {
        "statuscode": 500,
        "message": error
      };
      response.status(500).send(obj);
    });
});

module.exports = router;