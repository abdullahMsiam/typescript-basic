{
  class Wallet {
    public static balance: number = 0;

    increment(amnt: number) {
      const result = (Wallet.balance = Wallet.balance + amnt);
      return result;
    }

    static decrement(amnt: number) {
      Wallet.balance = Wallet.balance - amnt;
    }
  }

  const wallet1 = new Wallet();
  const wallet2 = new Wallet();

  wallet1.increment(10);
  wallet1.increment(10);
  wallet2.increment(20);
  Wallet.decrement(10);

  console.log(wallet1.increment(10));
  console.log(Wallet.balance);
  //   wrong something
}
