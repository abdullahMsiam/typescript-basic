const getUser = <T>(student: T) => {
  const fixedInfo = "get job";
  return {
    ...student,
    fixedInfo,
  };
};

const res1 = getUser({ name: "abdullah", age: 24 });
