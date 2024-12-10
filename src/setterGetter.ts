{
  class BankAccount {
    constructor(
      public readonly id: string,
      public name: string,
      protected _balance: number,
      private ideal: string
    ) {
      this.id = id;
      this.name = name;
      this._balance = _balance;
      this.ideal = ideal;
    }

    get getBalance() {
      return this._balance;
    }
    set deposit(amount: number) {
      this._balance = this._balance + amount;
    }
  }

  const myAccount = new BankAccount("hgs", "kuddus", 30, "nothing");

  myAccount.deposit = 40;
  console.log(myAccount.getBalance);
}
