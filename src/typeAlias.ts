type Student = {
  name: string;
  contact?: number;
  gender: "male" | "female"; //union type
  age: number;
};

type Teacher = {
  name: string;
  deg: string;
  workplace: string;
  age: number;
};

//intersection type
type CommonUser = Student & Teacher;

const commonUser: CommonUser = {
  name: "abdullah",
  deg: "teacher",
  workplace: "classroom",
  age: 50,
  gender: "male",
};

const student1: Student = {
  name: "abdullah",
  gender: "male",
  age: 24,
};

type Sum = (n1: number, n2: number) => number;

const sum: Sum = (n1, n2) => n1 + n2;
