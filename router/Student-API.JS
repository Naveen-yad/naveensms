const { request, response } = require("express");
const express = require("express");
var mongoose = require("mongoose");
const router = express.Router();
var Student = require('../models/Student.js');

router.post('/StudentAdd', (request, response) => 
{
  console.log("request",response);
//  Student
//   // .findOne({StudentID:request.body.StudentID})
//   .exec()
//   .lean()
//   .then(function(Student){
//   if( Student== request.body.FristName &&
//     Student== request.body.Address &&
//     Student== request.body.DeptID )
//     {
//     var obj = {
//       "statusCode": 500,
//       "message": "Student details aleardy exist's"
//     };
    
//   response.send(obj);
//     return;
//   }
//   });
//   // // else{
  
  

  if (request.body.StudentID && request.body.FristName && request.body.LastName && request.body.DOB 
    && request.body.Semester && request.body.Gender && request.body.Address && request.body.DeptID && request.body.Status
    && request.body.Phone) {

      console.log("request", request);
       var currentTime = new Date();
       var year = currentTime.getFullYear();
       console.log("YEAR",year-18);
       var DOB = request.body.DOB;
       var lastfour = DOB.substr(DOB.length - 4);
       console.log(year-18,lastfour);
       if(lastfour > year-18){
        var obj = {
              "statusCode": 500,
              "message": "Age should be above 18yrs!!"
            };
            response.send(obj);
            return;
       }
      
       console.log("request", request);
       var currentTime = new Date();
       var year = currentTime.getFullYear();
       console.log("YEAR",year-25);
       var DOB = request.body.DOB;
       var lastfour = DOB.substr(DOB.length - 4);
       console.log(year-25,lastfour);
       if(lastfour < year - 25 ){
        var obj = {
              "statusCode": 500,
              "message": "Age should be less than 25yrs!!"
            };
            response.send(obj);
            return;
       }

      console.log(request.body.FristName.length);
      if(request.body.FristName.length>20){
        var obj={
          "statuscode":500,
          "message":"FristName should be only less than 20"
        };
        response.send(obj);
        return;
      }
      
      console.log(request.body.Phone.length);
      if(request.body.Phone.length!=10){
        var obj={
          "statuscode":500,
          "message":"phone no should 10 digits"
        };
        response.send(obj);
        return;
      }

      if(request.body.DeptID== "ME"|| request.body.DeptID== "CS"|| request.body.DeptID=="EC"){
        if(request.body.Status=="A" || request.body.Status=="I"){
          if(request.body.Gender=="M" || request.body.Gender=="F"){
            if(request.body.Semester=="1st" || request.body.Semester=="2nd"||  request.body.Semester=="3rd" ||  request.body.Semester=="4th" ||  request.body.Semester=="5th" ||  request.body.Semester=="6th" ||  request.body.Semester=="7th" ||  request.body.Semester=="8th")
            {
       
      var user = new Student({
        StudentID: request.body.StudentID,
        FristName: request.body.FristName,
        LastName: request.body.LastName,
        DOB: request.body.DOB,
        // JOY: request.body.JOY,
        Semester: request.body.Semester,
        Gender: request.body.Gender,
        Address: request.body.Address,
        DeptID: request.body.DeptID,
        Status: request.body.Status,
        Phone: request.body.Phone
      });
      user.save().then(success => {
        console.log("Successfully added a new Student", success);
        var obj = {
          "statusCode": 200,
          "message": "successfully added a new Student",
          "record": success
        };
        response.send(obj);
      }).catch(error => {
        var obj = {
          "statusCode": 500,
          "message": error
        };
        response.send(obj);
      })
    }else{
      var objecto={
        "statuscode":400,
        "message":"SEMESTER should be  1st ,2nd ,3rd, 4th , 5th ,6th, 7th or 8th semseter "
      };
      response.send(objecto);
      return;
    }

    } else {
      var obj = {
        "statusCode": 500,
        "message": "gender should be M or F"
      };
      response.send(obj);
      return;
    }
  }else{
    var objecto={
      "statuscode":400,
      "message":"STATUS should be only ACTIVE OR INACTIVE "
    };
    response.send(objecto);
    return;
  }
}
   else {
    var obj = {
      "statusCode": 500,
      "message":"DeptID should be only CS, EC and ME"
    };
    response.send(obj);
    return;
  } 
}
  else {
    var obj = {
      "statusCode": 500,
      "message": "Please fill all fields"
    };
    response.send(obj);
  }
  });

router.get('/StudentGet', (request, response) => {
  Student
    .find()
    .lean()
    .exec()
    .then(function (success) {
      if (success) {
        let obj = {
          "statuscode": 200,
          "message": "successfully getting the details",
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


router.post('/StudentGetbyID', (request, response) => {
  Student
    .findOne({ StudentID: request.body.StudentID })
    .lean()
    .exec()
    .then(function (success) {
      if (success) {
        let obj = {
          "statuscode": 200,
          "message": "successfully getting the details",
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

router.post('/StudentUpdate', (request, response) => {
  Student
    .findOne({StudentID: request.body.StudentID })
    .exec()
    .then(function (success) {
      if (success) {
        console.log("successfully modify deatils", success);
        if (request.body.FristName) {
          success['FristName'] = request.body.FristName;
        }
        // if (request.body.Phone) {
        //   success['Phone'] = request.body.Phone;
        // }
        console.log("afterUpdate", success);
        success.save().then(data => {
          console.log("Successfully modify Student", data);
          var obj = {
            "statusCode": 200,
            "message": "successfully updated Student",
            "record": data
          };
          response.send(obj);
        }).catch(error => {
          var obj = {
            "statusCode": 500,
            "message": error
          };
          response.send(obj);
        })
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


router.post('/StudentDelete', (request, response) => {
  Student.deleteOne({ StudentID: request.body.StudentID })
    .exec()
    .then(function (data) {
      if (data) {
        let obj = {
          "statuscode": 200,
          "message": "successfully deleted the details",
          "record": data
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
