const kgToGram = (value: number | string): number | string | undefined => {
  if (typeof value === "string") {
    const conV = parseFloat(value);
    return `the string value ${conV * 1000}`;
  }
  if (typeof value === "number") {
    return value * 1000;
  }
};

const con1 = kgToGram(12) as number;
const con2 = kgToGram(12) as string;
