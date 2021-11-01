(function () {
  "use stirct";
  function Animal() {}

  var Animal = function (name, age) {
    this.name = name;
    this.age = age;

    // this.say = function () {
    //   console.log(this.name + "  " + this.age);
    // };
  };

  Animal.prototype.say = function () {
    console.log(this.name + "  " + this.age);
  };

  var cat = new Animal("小猫", 3);
  cat.say();

  // Animal.prototype.say.call(cat);

  // var params = {
  //   name: "cat2",
  //   age: 4
  // };
  // cat.say.call(params);

  var Cat = function (name, age) {
    Animal.apply(this, arguments);
  };

  Cat.prototype = Object.create(Animal.prototype);

  Cat.prototype.say = function () {
    console.log("子类：", this.name, this.age);
  };

  var cat1 = new Cat("猫猫", 3);
  cat1.say();
})();
