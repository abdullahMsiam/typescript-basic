interface StudentInt {
  id: number;
  name: string;
  mail: string;
}

const constrainUser = <T extends StudentInt>(student: T) => {
  const moreInfo = "I am hero";
  return {
    ...student,
    moreInfo,
  };
};

const constrainStudent = constrainUser({
  id: 12,
  name: "abdullah",
  mail: "abu@mail.com",
  extra: "my wish",
});
