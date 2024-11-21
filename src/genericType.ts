interface GenericUser<T, R> {
  name: string;
  age: number;
  position: T;
  car?: R;
}

type MyPosition = {
  hold: boolean;
  noc: number;
};

const myPosition: GenericUser<MyPosition, null> = {
  name: "abdullah",
  age: 23,
  position: {
    hold: true,
    noc: 0,
  },
};

const herPosition: GenericUser<
  {
    hold: boolean;
    starter: boolean;
    company: string;
  },
  boolean
> = {
  name: "maria",
  age: 18,
  position: {
    hold: true,
    starter: true,
    company: "Ph one",
  },
  car: false,
};
