// Named Parameters

// write a function that takes two named parameters:
// print each named parameter,
// then return the parameters added together

function functionWithTwoPara(x,y) {
console.log("x= ", x);
 console.log("y = ", y);
  return x + y;
}

// invoke the function and pass in two numbers
 functionWithTwoPara(3, 4);
// invoke the function and pass in more than two numbers
functionWithTwoPara(3, 4, 5, 6);
// invoke the function and pass in only one number
console.log(functionWithTwoPara(3));
// change the function to set default values for the parameters
function functionWithDefaultPara(x = "pepperoni", y = "Cheese") {
  console.log(" x =", x);
  console.log("y =", y);
  return x + y;
}
// again, invoke the function and pass in only one number
functionWithDefaultPara(5);
// Rest Operator
// add a rest operator to the function's parameters
// add a line to the function's body to print the value of the rest operator

function functionWithRestPara(x, y, ...a) {
  console.log(" x =", x);
    console.log("y =", y);
    console.log("Rest Params", a);
    return x + y;
}

// again, invoke the function and pass in more than two numbers
console.log(functionWithRestPara(3, 4, 5, 6));
