const constFunction = <X, Y extends keyof X>(obj: X, key: Y) => {
  const result = obj[key];
  console.log([result]);
  return result;
};

const oneUser = {
  name: "abdullah",
  age: 12,
  id: 1233,
};

const oneUserFunction = constFunction(oneUser, "name");
console.log(oneUser);
