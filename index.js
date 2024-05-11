// function lồng function

// function multiply(a, b) {
//   return a * b;
// }

// function square(x) {
//   return multiply(x, x);
// }
// function run(fn) {
//   console.log(`runing ${fn}`);
//   console.log(`Result: ${fn(10)}`);
//   console.log("Done");
// }
// run(square);

// Arrow function

const multiply = (a, b) => a * b;
const square = (x) => multiply(x, x);

// No argument
const greeting = () => console.log("heleoo");
// console.log(greeting());

// Multiply lines
const arr = [1, 2, 3, 4];
const get = (arr) => {
  try {
    return arr.length;
  } catch (error) {
    return undefined;
  }
};
// console.log(get([3]));

//Return an obj
const getObject = (name) => ({ name });
// console.log(getObject("hi"));

// function return function
// function curryadd(a) {
//   return function (b) {
//     return function (c) {
//       return a + b + c;
//     };
//   };
// }
// const curryadd = (a) => (b) => (c) => a + b + c;
// console.log(curryadd(1)(2)(3));

// Destructuring, spread
const handleRequest = (red) => {
  const { name, email } = red.body;
  console.log(name, email);
};
const request = {
  headers: {},
  body: {
    name: "tuan anh",
    email: "tuananh@email.com",
  },
};
// handleRequest(request);
const handleSubmit = ({ title, price = 0 }) => {
  console.log(title, price);
};
const item = {
  title: "Iphone 13",
  price: 7000,
};
// handleSubmit(item);

const state = {
  name: "",
  phone: "09765",
};
const setName = (name) => ({ ...state, name });
const newState = setName("tuananh");
// console.log(newState);
/**
 * Short circuit
 * Using logical OR (||)when assigning variables
 */
const text = "";
// let output = text ? text : "text is empty";
let output = text || "text is empty";
// console.log(output);

const person = {
  name: "minh",
  age: 35,
  job: "teacher",
};
// output = person.job ? person.job : "unemployed";
output = person.job || "unemployed";
// console.log(output);
