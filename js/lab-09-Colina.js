class Student {
  studentId;
  answers = [];

  constructor(studentId) {
    this.studentId = studentId;
  }

  addAnswer(question) {
    this.answers.push(question);
  }
}

class Question {
  qid;
  answer;

  constructor(qid, answer) {
    this.qid = qid;
    this.answer = answer;
  }

  checkAnswer(answer) {
    if (answer === this.answer) return true;
    else return false;
  }
}

class Quiz {
  questions = new Map();
  students = [];

  constructor(questions, students) {
    for (let question of questions) {
      this.questions.set(question.qid, question.answer);
    }
    this.students = students;
  }

  scoreStudentBySid(sid) {
    let studentToGrade = this.students.find(
      (student) => student.studentId === sid
    );

    let quizScore = 0;

    for (let answer of studentToGrade.answers) {
      if (answer.checkAnswer(this.questions.get(answer.qid))) {
        quizScore++;
      }
    }
    return quizScore;
  }

  getAverageScore() {
    let averageScore = 0;

    for (let student of this.students) {
      averageScore += this.scoreStudentBySid(student.studentId);
    }

    return averageScore / this.students.length;
  }
}

//Testing
const student1 = new Student(10);
student1.addAnswer(new Question(2, "a"));
student1.addAnswer(new Question(3, "b"));
student1.addAnswer(new Question(1, "b"));
const student2 = new Student(11);
student2.addAnswer(new Question(3, "b"));
student2.addAnswer(new Question(2, "a"));
student2.addAnswer(new Question(1, "d"));
const students = [student1, student2];
const questions = [
  new Question(1, "b"),
  new Question(2, "a"),
  new Question(3, "b"),
];
const quiz = new Quiz(questions, students);
let scoreforStudent10 = quiz.scoreStudentBySid(10);
console.log(scoreforStudent10); //Expected Result: 3
let scoreforStudent11 = quiz.scoreStudentBySid(11);
console.log(scoreforStudent11); //Expected Result: 2
let average = quiz.getAverageScore();
console.log(average); //Expected Result: 2.5
