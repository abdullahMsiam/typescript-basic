// method --> a function which in a object.
const userBalance = {
  name: "abdullah",
  balance: 100,
  addBalance(balance: number): string {
    return `new balance ${this.balance + balance}`;
  },
};
