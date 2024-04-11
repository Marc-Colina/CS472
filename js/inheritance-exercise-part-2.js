class Employee {
  #fullname;
  salary;
  hireDate;
  static #counter = 0;

  constructor(fullname, salary, hireDate) {
    this.#fullname = fullname;
    this.salary = salary;
    this.hireDate = hireDate;
    //increment counter in every object made
    Employee.#incCounter();
  }

  getName() {
    return this.#fullname;
  }

  getSalary() {
    return this.salary;
  }

  getHireDate() {
    return this.hireDate;
  }

  get howManyYears() {
    return new Date() - this.getHireDate();
  }

  static getCounter() {
    return Employee.#counter;
  }

  static #incCounter() {
    Employee.#counter++;
  }

  display() {
    console.log(this.#fullname, this.salary, this.hireDate);
  }
}

class Manager extends Employee {
  #bonus = 0;
  constructor(fullname, salary, hiredate, bonus) {
    super(fullname, salary, hiredate);
    this.bonus = bonus;
  }

  getSalary() {
    return super.getSalary + this.#bonus;
  }
}
