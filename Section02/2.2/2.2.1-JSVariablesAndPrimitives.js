// create a constant variable (const)

const firstName = "KeNisha";

// create a variable that can be reassigned (let)
let age = 21;
// create three variables and assign them values of different data types (=)
let lastName = "Hope";
let phone = 9990009911;
const isDrinkingAge = true;
// print the types of two variables that reference two different data types (typeof)
// TIP: console.log() prints a value in the console/terminal
console.log(typeof phone);
console.log(typeof isDrinkingAge);
// change the value referenced by a variable (dynamic typing)
console.log(typeof phone);
phone = "999-000-9911";

// print the type of the variable you just changed (typeof)
console.log(typeof phone);
// create variables and give them values to complete the sentences that will print  below.
// Which variables need to be created?
// What type of data needs to go in each variable?
let language = "Java";
let duration = 100;
let master = true;

console.log(
  "Hello, my name is " +
    firstName +
    ", and I am learning " +
    language +
    ". I have been practicing for only " +
    duration +
    " weeks, so my status as a master is: " +
    master +
    "."
);
