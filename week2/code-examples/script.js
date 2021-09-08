// Variables
// These can include only a–z, A–Z, 0–9, the $ symbol, and the underscore (_)
// But we always want to use camelCase: the first word of a variable should be lower case, the second word should be higher case
// The keyword "var" initializes a variable
//
//
// REMEMBER: W() is just writing to the page directly.
// WB() is a function to make each section more readable.


W("Variables!")
var myVariable = "I'm camelCase"
W("A camelCase variable: " + myVariable)

// Semicolons
// JavaScript used to require semicolons after each line
// But we don't need to do that anymore unless we want to have multiple statements on a line for some reason

var x=10;x+=5;x-=1;

//And we usually want to have use either "const" (which can't be redeclared) or "let" (which can be)
//
const myConst = 10 // i can't be redeclared
W("I'm a constant: " + myConst)
// if you try to redeclare a constant, you'll get an error
// myConst = 5
let myLet = 10
W("I'm a let: " + myLet)
myLet = 11
W("Which means I can be changed: " + myLet)

// Which leads us to operators
//Operators
// + for addition
// - for subtraction
// * for multiplication
// / for division
// % modulus (division remainder)
// ++ increment
// -- decrement

// Types of JavaScript objects
//Arrays

WB("")
W("Arrays!")

let myArray = ['banana', 'apple', 'orange']
W("I'm an array: " + myArray)

//get array items by index
let firstItem = myArray[0]
W("My first item is: " +  myArray[0])

// objects
let myObject = {'name': 'Brent', 'favoriteFood': 'burger', 'hobbies': ['biking', 'coding']}

// And we can access objects by their keys:

W('My name is: ' + myObject.name)

// And access arrays inside an object:
//
W('One of my hobbies is: ' + myObject.hobbies[0])


WB("")
// Advanced Control Flow
W("Control flow!")
//We're probably used to standard if/else statements, but let's go through them again

W("A simple if else statement: ")
let a = 55
if (a > 100) {
  W("a is greater than 100")
} else {
  W("a is less than 100")
}

//then add an else if
W("An else if statement:")

if (a > 100) {
  W("a is greater than 100")
} else if (a < 100 && a > 50) {
  W("a is greater than 50")
} else {
  W("a is less than 50")
}


// but the switch statement is useful when one variable could have multiple values, and you want to perform a different function for each one, so we can make something like this

W("A switch statement: ")

let number = 55

switch(number) {
  case (number > 100):
    W("number is greater than 100")
  case(number < 100 && number > 50):
    W("number is greater than 50")
  case(number < 50):
    W("number is less than 50")
}


// we can also use the ternary operator, which lets us do if/else statements quickly


W("A ternary operator: ")

let b = 37

b < 30 ? W("B is less than 30") : W("B is greater than 30")

WB("")
// Looping
//
W("Looping!")

W("A regular while loop:")
let counter = 0

while (counter < 5) {
  W("While loop counter: " + counter)
  counter++
}


//or a do-while loop, which is similar to a while loop but checks *after* the expression

W("A do-while loop: ")

let doCounter = 0

do {
  W("Do loop counter: " + doCounter)
  ++doCounter
} while (doCounter < 5)


// Or the beautiful for loop, which you've probably seen before

W("A for loop: ")

for (j = 0; j < 20; j++) {
  W("Counting up: " + j)
}

//But we can also break out of a for loop by meeting an if condition

W("A for loop with a break: ")

for (j=0; j<10;j++) {
  if (j == 5) {
    W("I decided to take a break at " + j)
    break
  } else {
      W("Counting again: " +  j)
  }
}


// Looping Through An Array

//we need to get the array length, but javascript makes that easy for us with the '.length' attribute:
W("Looping through an array: ")

let hatArray = ['bowler', 'fedora', 'baseball']

for (i = 0; i < hatArray.length; i++) {
  W(hatArray[i])
}

// Getting Comfortable With Functions

// General function syntax
// give it a name, pass it parameterso
// myArgument is the parameter here


function myBabyFunction(myArgument) {
  console.log("I'm a function!")
}

WB("")
// we can pass it a bunch of arguments, or parameters, if we want to:

W("Writing a bunch of stuff with a function: ")


function writeABunchOfStuff(v1, v2, v3, v4) {
  W(v1)
  W(v2)
  W(v3)
  W(v4)
}


writeABunchOfStuff('hello', 'goodbye', 'how are you', 'whats up')


// but JavaScript also takes something called the arguments array, which could save us some trouble
//

W("Writing a bunch of stuff with the arguments array: ")

function writeStuff() {
  for (i = 0; i < writeWithArguments.arguments.length; i++) {
    W(writeWithArguments.arguments[i] + "<br>")
  }
}

// we can also return stuff from JavaScript
// which could be useful if we want to, say, assign a variable to a function


W("Using a function that returns something: ")

function capitalizeWords() {
  let s = ""
  for (i = 0; i < capitalizeWords.arguments.length; i++) {
    //if we try this, we only get the first letter
    //    s += capitalizeWords.arguments[i][0].toUpperCase() + " "
        s += capitalizeWords.arguments[i][0].toUpperCase() + capitalizeWords.arguments[i].substr(1).toLowerCase() + " "
  }
  return s
}

let cap = capitalizeWords("i", "dont", "use", "punctuation")

W(cap += "<br>")
