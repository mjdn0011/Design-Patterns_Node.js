// function Person(name, surname, age) {
//   this.name = name;
//   this.surname = surname;
//   this.age = age;
// };

// Person.prototype.getFullName = function() {
//   return this.name + ' ' + this.surname;
// };

// Person.older = function(person1, person2) {
//   return (person1.age >= person2.age) ? person1 : person2;
// };

class Person {
  constructor (name, surname, age) {
    this.name = name;
    this.surname = surname;
    this.age = age;
  }

  getFullName () {
    return this.name + ' ' + this.surname;
  }

  static older (person1, person2) {
    return (person1.age >= person2.age) ? person1 : person2;
  }
}

class PersonWithMiddlename extends Person {
  constructor (name, middlename, surname, age) {
    super (name, surname, age);
    this.middlename = middlename;
  }

  // OVERRIDE
  getFullName() {
    return this.name + ' ' + this.middlename + ' ' + this.surname;
  }
}