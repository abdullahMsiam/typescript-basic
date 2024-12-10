{
  class Animal {
    constructor(
      public owner: string,
      public name: string,
      public isCool: boolean
    ) {}

    //method
    exploreFun() {
      console.log(`the owner of ${this.name} is ${this.owner}`);
    }
  }

  const dog = new Animal("abdullah", "good boy", true);
  const cat = new Animal("simu", "bad girl", false);

  cat.exploreFun();
}
