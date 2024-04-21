const express = require("express");
const router = express.Router();
const studentController = require("../controller/studentController.js");

router.get("/:id", studentController.getStudentById);
router.get("/", studentController.getAllStudents);
router.delete("/:id", studentController.deleteStudentById);
router.post("/", studentController.createStudent);
router.put("/", studentController.updateStudent);

module.exports = router;
