function Person(fname, lname) {
  this.fname = fname;
  this.lname = lname;
}

Person.prototype.display = function () {
  console.log(this.fname + " " + this.lname);
};

Person.compare = function (p1, p2) {
  if (p1.fname < p2.fname) {
    return 1;
  } else if (p1.fname > p2.fname) {
    return -1;
  } else return 0;
};

function Employee(fname, lname, salary) {
  Person.call(this, fname, lname);
  this.salary = salary;
}

Employee.prototype.display = function () {
  console.log(this.fname + " " + this.lname + " " + this.salary);
};

Employee.compare = function (e1, e2) {
  return e1.salary - e2.salary;
};

Object.setPrototypeOf(Employee, Person);
Object.setPrototypeOf(Employee.prototype, Person.prototype);

let p1 = new Person("Marc", "Colina");
let p2 = new Person("Anna", "Smith");

let e1 = new Employee("John", "Smith", 10000);
let e2 = new Employee("Marc", "Smith", 20000);

p1.display();
p2.display();

e1.display();
e2.display();

console.log(Person.compare(p1, p2));
console.log(Employee.compare(e1, e2));
