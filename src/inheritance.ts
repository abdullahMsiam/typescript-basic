{
  class User {
    constructor(
      public name: string,
      public id: string,
      public dailyRoutine: boolean
    ) {}
    getInfo() {
      console.log(`${this.name} holding ${this.id}`);
    }
  }

  class Student extends User {
    constructor(name: string, id: string, dailyRoutine: boolean) {
      super(name, id, dailyRoutine);
    }
  }

  class Employee extends User {
    constructor(
      name: string,
      id: string,
      dailyRoutine: boolean,
      public designation: string
    ) {
      super(name, id, dailyRoutine);
    }
    getEmployee() {
      console.log(`${this.name} designation is ${this.designation}`);
    }
  }

  const student = new Student("abd", "ass", true);
  const teacher = new Employee("sams", "lkggh", true, "teacher");
  student.getInfo();
  teacher.getEmployee();
  teacher.getInfo();
}
