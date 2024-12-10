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

    getBalance() {
      return this._balance;
    }

    addBalance(amount: number) {
      this._balance = this._balance + amount;
    }
  }

  const myAccount = new BankAccount("hgs", "kuddus", 30, "nothing");
  console.log(myAccount.getBalance());
}
