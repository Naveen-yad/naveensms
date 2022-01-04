const express = require("express");
var mongoose = require("mongoose");
const router = express.Router();
var app = express();
const bodyparser = require('body-parser');
app.use(bodyparser.urlencoded({extended:true}));
app.use(bodyparser.json());

var Dept = require('./models/Dept.js');
var DeptApi = require('./router/Dept-API.JS');

var Student = require('./models/Student.js');
var StudentApi = require('./router/Student-API.JS');

var Course = require('./models/Course.js');
var CourseApi = require('./router/Course-API.JS');

var Marks = require('./models/Mark.js');
var MarksApi = require('./router/Marks-API.JS');

const {application} = require("express");

app.use('/',router);
app.get("/",function(request,response){
  response.send("Hello World")
})
mongoose.connect('mongodb://localhost:27017/StudentDB',() => {
  console.log("[+] Succesfully connected to database.");
});
app.listen(2000,function(){
  console.log("started application on port %d", 2000)
});

app.use('/',DeptApi);
app.use('/',StudentApi);
app.use('/',CourseApi);
app.use('/',MarksApi);




