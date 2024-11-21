//--> type alias allow for premitive value and interface doesn't allow it
interface UserInterface {
  name: string;
  age: number;
}

interface UserExtend extends UserInterface {
  role: string;
  work: boolean;
}

const userShow: UserExtend = {
  name: "abdullah",
  age: 23,
  role: "teacher",
  work: false,
};

interface ArrayInterface {
  [index: number]: number;
}
{
  type ArrayType = number[];
  const typArray: ArrayType = [1, 3, 4];
}
const IntArray: ArrayInterface = [1, 3, 5, 6, 5];

interface CharInterface {
  [index: number]: string;
}
const intArray: CharInterface = ["abu", "babu", "bak"];
