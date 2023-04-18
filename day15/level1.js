
class Animal {
    constructor(name, age, color, legs) {
      this.name = name;
      this.age = age;
      this.color = color;
      this.legs = legs;
    }
    
    eat(food) {
      console.log(`${this.name} is eating ${food}.`);
    }
    
    sleep() {
      console.log(`${this.name} is sleeping.`);
    }
    
    speak() {
      console.log(`${this.name} says: ${this.sound}.`);
    }
  }
  

  const cat = new Animal('Whiskers', 3, 'gray', 4);
  cat.eat('fish'); 
  cat.sound = "meow";
  cat.sleep(); 
  cat.speak();

  class Dog extends Animal{
    eat(){
        console.log("dog always eat");
    }
  }
  class Cat extends Animal{
    sleep(){
        console.log(`cat is sleeping.`);
    }
  }
  const c1 = new Cat("catie",2,"black",4);
  const d1 = new Dog("dogie",3,"white",4);
  c1.sleep();
  d1.eat();