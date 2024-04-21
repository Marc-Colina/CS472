let students = [
  {
    id: 103,
    name: "Marc Colina",
    program: "Compro",
  },
  {
    id: 102,
    name: "Mary Colina",
    program: "Compro",
  },
  {
    id: 104,
    name: "Rose Mabelle Seares",
    program: "MBA",
  },
  {
    id: 105,
    name: "Rose Marie Colina",
    program: "MBA",
  },
  {
    id: 106,
    name: "Marlonito Colina",
    program: "MBA",
  },
];

class Student {
  constructor(id, name, program) {
    this.id = id;
    this.name = name;
    this.program = program;
  }
  static getAllStudents() {
    return students.map((student) => student);
  }

  static getStudentById(id) {
    let student = students.find((student) => student.id == id);

    if (student) return student;
    else throw new Error("Student with id : " + id + " doesn't exist");
  }

  createStudent() {
    let student = students.find((student) => student.id == this.id);
    if (!student) {
      students.push(this);
      return this;
    } else throw new Error("Student with id : " + this.id + " already exists");
  }

  static deleteStudentById(id) {
    let index = students.findIndex((student) => student.id == id);
    if (index != -1) {
      return students.splice(index, 1)[0];
    } else throw new Error("Student with id : " + id + " doesn't exist");
  }

  static updateStudent(student) {
    let studentToUpdate = students.find(
      (existingStudent) => existingStudent.id == student.id
    );

    if (studentToUpdate) {
      studentToUpdate.name = student.name;
      studentToUpdate.program = student.program;
      return student;
    } else {
      throw new Error("Student with id : " + student.id + " doesn't exist");
    }
  }

  //We moved the filertering and sorting logic to the controller
}

module.exports = Student;
