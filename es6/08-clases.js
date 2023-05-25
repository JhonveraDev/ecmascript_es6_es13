class user {
  constructor(name, age) {
    name,
    age
  }

  //Method
  speak() {
    return "Hola";
  }

  //Method
  gretting() {
    return `${this.speak()} ${this.name}`;
  }

  get uAge() {
    return this.age;
  }

  set uAge(a) {
    return (this.age = a);
  }
}

const juan = new user("juan");
console.log(juan.gretting());

const developer = new user("Developer", 26);
console.log(developer.uAge);
console.log(developer.uAge = 27);
