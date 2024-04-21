const Student = require("../model/Student");

let studentController = {
  getAllStudents: function (req, res) {
    let students = Student.getAllStudents();
    const { sort: sortBy, "sort-direction": sortDirection = "asc" } = req.query;

    Object.entries(req.query).forEach(([key, value]) => {
      if (!["sort", "sort-direction"].includes(key)) {
        students = students.filter((student) => student[key] == req.query[key]);
      }
    });

    if (sortBy) {
      students.sort(getComparator(sortBy, sortDirection));
    }

    if (students.length != 0) {
      res.status(200).json(students);
    } else
      res
        .status(404)
        .json({ message: "The Students' list requested is empty!" });
  },

  getStudentById: function (req, res) {
    try {
      if (!req.params.id) throw new Error("Please provide ID!");
      let student = Student.getStudentById(req.params.id);
      res.json(student);
    } catch (error) {
      res.status(404).json({ message: error.message });
    }
  },

  createStudent: function (req, res) {
    try {
      const { id, name, program } = req.body;
      if (!(id && name && program))
        throw new Error("Please provide needed information.");
      let student = new Student(id, name, program);
      res.json(student.createStudent());
    } catch (error) {
      res.status(404).json({ message: error.message });
    }
  },

  deleteStudentById: function (req, res) {
    try {
      if (!req.params.id) throw new Error("Please provide ID!");
      res.json(Student.deleteStudentById(req.params.id));
    } catch (error) {
      res.status(404).json({ message: error.message });
    }
  },

  updateStudent: function (req, res) {
    try {
      if (!req.body) throw new Error("Please provide needed information.");
      let student = req.body;
      res.json(Student.updateStudent(student));
    } catch (error) {
      res.status(404).json({ message: error.message });
    }
  },
};

function getComparator(sortBy, sortDirection) {
  //We will add a comparator function as a return so that we can appropriately set the student[sortBy] depending on what
  //property we should sort our students by. This was made possible because of closure.
  //Javascript and the concept of closures are amazing! I'm starting to love Javascript even more!
  return function comparator(student1, student2) {
    //We use the multipler to easily reverse the return type because if its ascending the first if condition should return
    //a positive and if its descending the first condition should return a negative. To prevent having to explicitly put
    //another if statement, we just multiply them with the multiplier
    let multiplier = 1;
    if (sortDirection == "desc" || sortDirection == "descending") {
      multiplier = -1;
    }

    if (
      typeof student1[sortBy] === "number" &&
      typeof student2[sortBy] === "number"
    ) {
      return (student1[sortBy] - student2[sortBy]) * multiplier;
    } else if (
      typeof student1[sortBy] === "string" &&
      typeof student2[sortBy] === "string"
    ) {
      return student1[sortBy].localeCompare(student2[sortBy]) * multiplier;
    }
  };
}

module.exports = studentController;
