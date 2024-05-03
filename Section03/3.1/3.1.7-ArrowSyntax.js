// refactor the functions below into arrow syntax
//Function declartion
//function myNumberFunction() {
//  return ((2 ** 2 + 3) % 4) * 14;
//}
const myNumberFunction = () => ((2 ** 2 + 3) % 4) * 14;
//Function declartion
//function greet(name) {
// return `Hello, ${name}`;
//}

//Arrow syntax
const greet = name => "Hello , ${name}";

//Function declartion
//const timeOfDayGreet = function(name, timeOfDay) {
//return `Hello, ${name}, good ${timeOfDay}`;
//};

//Arrow syntax
const timeOfDayGreet = (name, timeOfDay) => `Hello, ${name}, good ${timeOfDay}`;

//Function declartion
//function tripleAndHalf(num) {
//let triple = num * 3;
//return triple / 2;
//}

const tripleAndHalf = num => {
  let triple = num * 3;
  return triple / 2;
};
//Function declartion
//function sumTwoNumbers(num1, num2) {
//let sum = num1 + num2;
// console.log(`The sum of your numbers is ${sum}.`);
// return sum;
//}

const sumTwoNumbers = (num1, num2) => {
  let sum = num1 + num2;
  console.log(`The sum of your numbers is ${sum}.`);
  return sum;
};
