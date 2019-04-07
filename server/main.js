import {Meteor} from "meteor/meteor";
import {Players} from "./../imports/api/players";

Meteor.startup(() => {
  class Person {
    constructor(name = "Anon", age = 18) {
      this.name = name;
      //Set age -> default to zero
      this.age = age;
    }
    getGreeting() {
      return `Hi I'm ${this.name}.`;
    }
    getPersonDescription() {
      return `${this.name} is ${this.age} years old.`;
    }
  }

  class Employee extends Person {
    constructor(name, age, title){
      super(name,age);
      this.title = title;
    }
    getGreeting(){
      if(this.title){
        return `Hi I'm ${this.name}. I work as a ${this.title}`;
      }
      else{
        return super.getGreeting();
      }
    }
    hasJob(){
      return !!this.title;
    }
  }

  class Programmer extends Person {
    constructor(name, age, preferredLanguage = "Assembly") {
      super(name,age);
      this.preferredLanguage = preferredLanguage;
    }
    getGreeting() {
      if(this.preferredLanguage){
        return `Hi I'm ${this.name}, I'm a programmer and my favorite language is ${this.preferredLanguage}`;
      }
      else{
        return super.getGreeting();
      }
    }
  }

  let me = new Programmer("Aj", 23, "C++");
  console.log(me.getGreeting());
});
