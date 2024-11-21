const aArray: number[] = [1, 2, 3];
const bArray: number[] = [2, 3, 4];

const newArray = aArray.push(...bArray);

const friends = {
  close: "cin",
  distance: "lob",
};
const teacher = {
  good: "vat",
  bad: "meat",
};
const combine = {
  ...teacher,
  ...friends,
};
