/*
  EXAMPLE TASK:
    - Write an Airplane constructor that initializes `name` from an argument.
    - All airplanes built with Airplane should initialize with an `isFlying` of false.
    - Give airplanes the ability to `.takeOff()` and `.land()`:
        + If a plane takes off, its `isFlying` property is set to true.
        + If a plane lands, its `isFlying` property is set to false.
*/

// EXAMPLE SOLUTION CODE:
function Airplane(name) {
  this.name = name;
  this.isFlying = false;
}
Airplane.prototype.takeOff = function () {
  this.isFlying = true;
};
Airplane.prototype.land = function () {
  this.isFlying = false;
};


/*
// 👇 COMPLETE YOUR WORK BELOW 👇
// 👇 COMPLETE YOUR WORK BELOW 👇
// 👇 COMPLETE YOUR WORK BELOW 👇
*/

/*
  TASK 1
    - Write a Person Constructor that initializes `name` and `age` from arguments.
    - All instances of Person should initialize with an empty `stomach` array.
    - Give instances of Person the ability to `.eat("someFood")`:
        + When eating an edible, it should be pushed into the `stomach`.
        + The `eat` method should have no effect if there are 10 items in the `stomach`.
    - Give instances of Person the ability to `.poop()`:
        + When an instance poops, its `stomach` should empty.
    - Give instances of Person a method `.toString()`:
        + It should return a string with `name` and `age`. Example: "Mary, 50"
*/

/*
  TASK 1
    - Write a Person Constructor that initializes `name` and `age` from arguments.
    - All instances of Person should initialize with an empty `stomach` array.
    - Give instances of Person the ability to `.eat("someFood")`:
        + When eating an edible, it should be pushed into the `stomach`.
        + The `eat` method should have no effect if there are 10 items in the `stomach`.
    - Give instances of Person the ability to `.poop()`:
        + When an instance poops, its `stomach` should empty.
    - Give instances of Person a method `.toString()`:
        + It should return a string with `name` and `age`. Example: "Mary, 50"
*/

function Person(name, age) {
  this.name = name;
  this.age = age;
  this.stomach = [];


//create an eat method that gives Person the ability to eat a food
//if the stomach has < 10 items, then the argument should be pushed into the empty array

  Person.prototype.eat = function(edible) {
    if(this.stomach.length < 10) {
      this.stomach.push(edible);
    }
  }

//create a poop method that empties the array

  Person.prototype.poop = function() {
    this.stomach = [];
  }

//create a method called toStrng which returns a string with name and age

  Person.prototype.toString = function() {
    return `${this.name}, ${this.age}`
  }
}

//create my object

const personOne = new Person("Chris", 38);
const personTwo = new Person("Victor", 20);
const personThree = new Person("Mike", 36);

console.log(personOne.toString());
console.log(personTwo.toString());
console.log(personThree.toString());

personThree.eat("Truffle fries");
personThree.eat("Truffle soup");
personThree.eat("Truffle salad");

console.log(personThree.stomach);

personThree.poop();

console.log(personThree.stomach);

}

/*
  TASK 2
    - Write a Car constructor that initializes `model` and `milesPerGallon` from arguments.
    - All instances built with Car:
        + should initialize with an `tank` at 0
        + should initialize with an `odometer` at 0
    - Give cars the ability to get fueled with a `.fill(gallons)` method. Add the gallons to `tank`.
    - STRETCH: Give cars ability to `.drive(distance)`. The distance driven:
        + Should cause the `odometer` to go up.
        + Should cause the the `tank` to go down taking `milesPerGallon` into account.
    - STRETCH: A car which runs out of `fuel` while driving can't drive any more distance:
        + The `drive` method should return a string "I ran out of fuel at x miles!" x being `odometer`.
*/

function Car(model, milesPerGallon) {
  this.model = model;
  this.milesPerGallon = milesPerGallon;
  this.tank = 0;
  this.odometer = 0;
}

Car.prototype.fill = function(gallons) {
  return (this.tank += gallons);
};

Car.prototype.drive = function(distance) {
  if (this.tank > 0 && distance > 0) {
    this.odometer += distance;
    distance = this.milesPerGallon * this.tank;
    this.tank = distance / this.milesPerGallon;
    this.tank = Math.abs(this.tank);
    if (this.tank === 0) {
      this.tank = 0;
      return `I ran out of fuel at ${this.odometer} miles!`;
    }
  }
};

// odometer increases by distance travelled
// distance travelled is determined by miles per gallon * gallons

const batmobile = new Car("BatMobile", 20);

batmobile.fill(10);
batmobile.fill(10);

console.log(batmobile.tank);

batmobile.drive(201);

console.log(batmobile.odometer);

/*
  TASK 3
    - Write a Baby constructor subclassing Person.
    - Besides `name` and `age`, Baby takes a third argument to initialize `favoriteToy`.
    - Besides the methods on Person.prototype, babies have the ability to `.play()`:
        + Should return a string "Playing with x", x being the favorite toy.
*/

function Baby(name, age, favoriteToy) {
  this.name = name;
  this.age = age;
  this.favoriteToy = favoriteToy;
}

Baby.prototype = Object.create(Person.prototype);

Baby.prototype.play = function(name, age, favortiateToy) {
  return `Playing with ${this.favoriteToy}`;
};

console.log(Baby.prototype());

/* 
  TASK 4

  In your own words explain the four principles for the "this" keyword below:
  1. Global binding: When in the global scope, the value of "this" will be the window/console object.
  2. Implicit binding: Whenever a function is called by a preceding dot, the object left of the dot gets "this".
  3. New binding: Whenever a constructor function is used "this" refers to the specific instance of the object that is created and returned by the constructor function.
  4. Explicit binding: Whenever JoavaScripts call or apply method is used, "this" is explicitly defined. 
*/


///////// END OF CHALLENGE /////////
///////// END OF CHALLENGE /////////
///////// END OF CHALLENGE /////////
if (typeof exports !== 'undefined') {
  module.exports = module.exports || {}
  if (Airplane) { module.exports.Airplane = Airplane }
  if (Person) { module.exports.Person = Person }
  if (Car) { module.exports.Car = Car }
  if (Baby) { module.exports.Baby = Baby }
}
