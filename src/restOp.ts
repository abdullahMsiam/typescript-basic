const helloFriends = (...peoples: string[]) => {
  peoples.forEach((frn: string) => console.log(`hello ${frn}`));
};

helloFriends("abul", "babul", "kabul", "dhaka");
