//Question#1
let student1 = {
  firstName: "Marc",
  lastName: "Colina",
  grades: [99, 98, 100, 99, 100],
  insertGrade: function (grade) {
    this.grades.push(grade);
  },
  computeAverageGrade: function () {
    return (
      this.grades.reduce(
        (accumulator, current) => (accumulator = accumulator + current),
        0
      ) / this.grades.length
    );
  },
};

//Question#1 Testing
console.log("Initial Student 1 Object ");
console.log(student1);
console.log("Average of Student 1: " + student1.computeAverageGrade());
//"New Grade Inserted
student1.insertGrade(99);
console.log("Student 1 with newly inserted grade : ");
console.log(student1);
console.log("Average of Student 1 : " + student1.computeAverageGrade());
console.log(student1.grades.sort());

//Question#2
function Student(firstName, lastName, grades) {
  this.firstName = firstName;
  this.lastName = lastName;
  this.grades = grades;
}

Student.prototype.insertGrade = function (grade) {
  this.grades.push(grade);
};

Student.prototype.computeAverageGrade = function () {
  return (
    this.grades.reduce(
      (accumulator, current) => (accumulator = accumulator + current),
      0
    ) / this.grades.length
  );
};

//Question#2 Testing
let student2 = new Student("Marc", "Colina", [99, 98, 100, 99, 100]);
console.log("Initial Student 2 Object ");
console.log(student2);
console.log("Average of Student 2 : " + student2.computeAverageGrade());
//"New Grade Inserted
student2.insertGrade(99);
console.log("Student 2 with newly inserted grade : ");
console.log(student2);
console.log("Average of Student 2 : " + student2.computeAverageGrade());

//Question#3
Array.prototype.mySort = function () {
  this.sort((a, b) => {
    return a - b;
  });
};

//Question#3 Testing
console.log("Student 2 grades before sorting : " + student2.grades);
student2.grades.mySort();
console.log("Student 2 grades after sorting : " + student2.grades);

//Question#4
function Animal(name, speed) {
  this.name = name;
  this.speed = speed;
}

Animal.prototype.run = function (speed) {
  if (speed < this.speed)
    console.error("Cannot decrease or maintain speed. Must increase");
  else this.speed = speed;
};

Animal.compareBySpeed = function (a1, a2) {
  return a1 - a2;
};

function Rabbit(name, speed) {
  Animal.call(this, name, speed);
}

Rabbit.prototype.hide = function () {
  console.log(this.name + " hides");
};

Object.setPrototypeOf(Rabbit, Animal);
Object.setPrototypeOf(Rabbit.prototype, Animal.prototype);

//Question#4 Testing
let animal = new Animal("Dog", 100);
console.log("Animal before calling run() method : ");
console.log(animal);
console.log("Animal after calling run() method : ");
animal.run(200);
console.log(animal);

let animal2 = new Animal("Cat", 150);
console.log(
  "Calling compareBySpeed() : " +
    Animal.compareBySpeed(animal.speed, animal2.speed)
);

let rabbit1 = new Rabbit("Bunny1", 250);
console.log("Bunny1 before calling run() method : ");
console.log(rabbit1);
console.log("Bunny1 after calling run() method : ");
rabbit1.run(300);
console.log(rabbit1);

let rabbit2 = new Rabbit("Bunny2", 300);
console.log("Bunny2 2:");
console.log(rabbit2);
console.log(
  "Calling compareBySpeed in Rabbit object: " +
    Rabbit.compareBySpeed(rabbit1.speed, rabbit2.speed)
);

rabbit2.hide();
