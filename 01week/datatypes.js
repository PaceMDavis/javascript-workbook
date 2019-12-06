//Write a JavaScript program to display the current day and time.
//create a date variable, variable to put it in the string
//create time variable
//console log with space between
let date = new Date();
let n = date.toDateString();
let time = date.toLocaleTimeString();
console.log(n + " " + time);

//Write a JavaScript program to convert a number to a string.
//create variable that is a number
//create second value that converts the number to a string
//use String with the value of number inside to convert
//console.log
let number = 7;
let value1 = String(number);
console.log(value1);

//Write a JavaScript program to convert a string to the number.
//Reverse steps and variable creation from previous conversion
let string = "7";
let value2 = Number(string);
console.log(value2);

//Write a JavaScript program that takes in different datatypes and //prints out whether they are a
// With a different declaration the console log will print out what 
// datatype it is using typeof
let booleanType = true
let stringType = "Hi, I'm here"
console.log(typeof booleanType);
//Another way to analyse datatypes

var booleanTeam = true;
//var nullNow = !Null;
//var cantDefineMe =;
var number15 = 15;
var stringCheese = "Hello everybody!";
var NaNTime = ("hello" - 15);

// your variable
var myBool = false;

// function declaration
function isTypeOf(data) {
  return console.log(typeof data);
}
// function invocation
isTypeOf(myBool);


// Write a JavaScript program that adds 2 numbers together.
// Declare two variables that are both numbers and then add them in // the console log
let firstNumber = 9;
let secondNumber = 3;
console.log(firstNumber + secondNumber);

//Write a JavaScript program that runs only when 2 things are true.
//Create two variables that are booleans
//Create if/else statement that evaluates whether both are true
//Produce output if they are both true
let boolean1 = true
let boolean2 = true

   if (boolean1 === true && boolean2 === true) {
   console.log("Both are True");
 } else {
   console.log("Error");
 }

//Write a JavaScript program that runs when 1 of 2 things are true.
//Declare variables
//set an if statement that says if either variable 1 or variable two //are not true then console log
let boolean3 = true
let boolean4 = false

   if (boolean3 != true || boolean4 != true) {
   console.log("One is True, yohoo!");
 } else {
   console.log("Error");
 }

//Write a JavaScript program that runs when both things are not true. 
//Write 
let boolean5 = false
let boolean6 = false

   if (boolean5 === false && boolean6 === false) {
   console.log("You have succeeded at failure");
 } else {
   console.log("Error");
 }

