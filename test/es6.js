class Animal {
  constructor(name = "--", age = 0) {
    this.name = name;
    this.age = age;
  }

  say() {
    console.log("name:", this.name, " age:", this.age);
  }
}

class Cat extends Animal {
  constructor(name, age) {
    super(name, age);
  }

  say() {
    console.log("子类：", "name:", this.name, " age:", this.age);
    super.say();
  }
}

var cat = new Cat("猫猫哈哈哈", 511);
cat.say();
