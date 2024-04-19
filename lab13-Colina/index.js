const express = require("express");
const app = express();
const path = require("path");
const jsonParser = express.json();
const fileFetcher = require("./routes/fileFetcher.js");

let arrayOfStudents = [];

//Configuration
app.set("case sensitive routing", false);

//File Fetcher Router
app.use(fileFetcher);

//CRUD student operations
app.get("/get-student", express.text(), (req, res, next) => {
  let studentID = req.body;
  console.log("STUDENT id here : " + studentID);
  res.send(getStudent(studentID));
});

app.post("/add-student", jsonParser, (req, res, next) => {
  let newStudentObj = req.body;
  arrayOfStudents.push(newStudentObj);

  console.log("Students Array after adding student: " + newStudentObj.name);
  console.log(arrayOfStudents);

  res.send("Successfully Added " + newStudentObj.name);
});

app.delete("/delete-student", jsonParser, (req, res, next) => {
  let studentToDelete = req.body;
  let indexOfStudentToDelete = arrayOfStudents.findIndex(
    (student) => student.studentID === studentToDelete.studentID
  );

  if (indexOfStudentToDelete != -1) {
    arrayOfStudents.splice(indexOfStudentToDelete, 1);
  }

  console.log("Students Array after deleting student: " + studentToDelete.name);
  console.log(arrayOfStudents);
  res.send("Succesfully Deleted " + studentToDelete.name);
});

app.put("/update-student", jsonParser, (req, res, next) => {
  let studentInfoUsedForUpdating = req.body;
  let studentToUpdate = arrayOfStudents.find(
    (student) => student.studentID === studentInfoUsedForUpdating.studentID
  );

  if (studentToUpdate !== undefined) {
    studentToUpdate.name = studentInfoUsedForUpdating.name;
  }
  console.log("Student List after Updating: ");
  console.log(arrayOfStudents);
  res.send(
    "Successfully Updated Student with ID : " +
      studentInfoUsedForUpdating.studentID
  );
});

app.all("/all", (req, res, next) => {
  console.log(
    "You have successfully arrived at the app.all route! This can cater to multiple methods and the method you're using right now is :  " +
      req.method
  );
  res.send(
    "You have successfully arrived at the app.all route! This can cater to multiple methods and the method you're using right now is :  " +
      req.method
  );
});

//Using req.query
app.get("/get-with-studentID", express.text(), (req, res, next) => {
  let studentID = req.query.studentID;
  res.send(getStudent(studentID));
});

//Using req.parameters
app.get("/get-with-studentID/:studentID", express.text(), (req, res, next) => {
  let studentID = req.params.studentID;
  res.send(getStudent(studentID));
});

//next(), next('route'), next(error)
app.get(
  "/check-if-student-exists",
  jsonParser,
  (req, res, next) => {
    //First we have to check if the studentID exists. If it exists, we go on
    //to the next checking : the name. If it doesn't, we skip the next middleware and go directly to the last middleware
    let studentToCheck = req.body;
    let isStudentIDPresent = arrayOfStudents.some(
      (student) => student.studentID == studentToCheck.studentID
    );

    if (isStudentIDPresent) next();
    //If ID does not exist, we don't bother to check the name and head directly to the third function. So
    //we skip the second function using next("route");
    else next("route");
  },
  (req, res, next) => {
    let studentToCheck = req.body;
    let isStudentNamePresent = arrayOfStudents.some(
      (student) => student.name === studentToCheck.name
    );

    if (isStudentNamePresent) {
      res.send(
        "Student with ID : " +
          studentToCheck.studentID +
          " and name : " +
          studentToCheck.name +
          " EXISTS!"
      );
    } else {
      next("route");
    }
  }
);

//Goes here if the first route check-if-student-exists does not find the student.
//This will throw the next("error")
app.get("/check-if-student-exists", jsonParser, (req, res, next) => {
  next("Student Does Not Exist!");
});

//Error middleware
app.use(function (err, req, res, next) {
  res.status(500).send(err);
});

//Routing to catch if an invalid HTTP request URL was used
app.use((req, res, next) => {
  res.status(404);
  res.send("The page you are requesting does not exist!");
});

//bootup
app.listen(process.env.PORT || 3000, () => {
  console.log("Your server is running in port " + process.env.PORT);
});

//Helper Methods
function getStudent(studentID) {
  let studentToReturn = arrayOfStudents.find(
    (studentInArray) => studentInArray.studentID == studentID
  );
  if (studentToReturn !== undefined) {
    console.log("Successfully Fetched Student: " + studentToReturn.name);
    return studentToReturn;
  } else {
    console.log("Student with ID : " + studentID + " does not exist!");
    return "Student with ID : " + studentID + " does not exist!";
  }
}
