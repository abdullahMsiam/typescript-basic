const age = 12;

const isAdult = age >= 18 ? "adult" : "teen";

//nullish operator-->

const isReal = null;
const resReal = isReal ?? "Student";
console.log({ resReal });
