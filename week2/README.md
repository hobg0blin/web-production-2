## Week 2: JavaScript Review


## An In-Depth JavaScript Review


A running version of all these examples is in the [demo folder]().

**Note** that we’re using a function called `W()`, imported in `index.html` from the `utilities.js` folder. Take a look in that folder to see some of the other, similar, shorthand functions. Once we get to jQuery, we won’t have to make functions like this, but this is a function written so that we don’t have to use “document.write” every time. Functions are great for making shorthand when we’re writing the same line of code a lot.

### Variables
 These can include only a–z, A–Z, 0–9, the $ symbol, and the underscore (_)
 But we always want to use camelCase: the first word of a variable should be lower case, the second word should be higher case
 The keyword "var" initializes a variable:

`var myVariable = "I'm camelCase`

 Semicolons
 JavaScript used to require semicolons after each line
 But we don't need to do that anymore unless we want to have multiple statements on a line for some reason

`var x=10;x+=5;x-=1`

And we usually want to have use either "const" (which can't be redeclared) or "let" (which can be)

```
const myConst = 10 //  i can't be redeclared
let myLet = 10
myLet = 11
```

## Operators
```
+ for addition
 - for subtraction
 * for multiplication
 / for division
 % modulus (division remainder)
 ++ increment
 -- decrement
```

## Types of JavaScript objects
### Arrays

`let myArray = ['banana', 'apple', 'orange']`

And we can get array items by index, where the first item is always 0:

`console.log(myArray[0])`

### Objects

`let myObject = {‘name’: ‘Brent’, ‘favoriteFood’: ‘burger’, ‘hobbies’: [‘biking’, ‘coding’]}`

And we can access objects by their keys:

`W(‘My name is: ’ + myObject.name)`

And access arrays inside an object:
`W(‘One of my hobbies is: ‘ + myObject.hobbies[0])`


## Advanced Control Flow

We're probably used to standard if/else statements, but let's go through them again:

```
let a = 55
if (a > 100) {
  W("a is greater than 100")
} else {
  W("a is less than 100")
}
```

Then add an else if:

```
if (a > 100) {
  W("a is greater than 100")
} else if (a < 100 && a > 50) {
  W("a is greater than 50")
} else {
  W("a is less than 50")
}
```


But the switch statement is useful when one variable could have multiple values, and you want to perform a different function for each one, so we can make something like this

```
number = 55

switch(number) {
  case (number > 100):
    W("number is greater than 100")
  case(number < 100 && number > 50):
    W("number is greater than 50")
  case(number < 50):
    W("number is less than 50")
}
```


We can also use the ternary operator, which lets us do if/else statements quickly: 

```
let b = 37

a < 30 ? W("a is less than 30") : W("A is greater than 30")
```

### Looping

We can use a while loop to do something multiple times until it meets a condition:
```
let counter = 0

while (counter < 5) {
  W("While loop counter: " + counter)
  counter++
}
```


Or a do-while loop, which is similar to a while loop but checks *after* the expression
```
let doCounter = 0

do {
  W("Do loop counter: " + doCounter)
  ++doCounter
} while (doCounter < 5)
```

Or the beautiful for loop, which you've probably seen before:

```
for (j = 0; j < 20; j++) {
  W("Counting up: " + j)
}
```
But we can also break out of a for loop by meeting an if condition:
```
for (j=0; j<10;j++) {
  if (j == 5) {
    W("I decided to take a break at " + j)
    break
  } else {
      W("Counting again: " +  j)
  }
}
```

### Looping Through An Array

We need to get the array length, but javascript makes that easy for us with the '.length' attribute:

```
let hatArray = ['bowler', 'fedora', 'baseball']

for (i = 0; i <= hatArray.length; i++) {
  W(hatArray[i])
}
```

### Getting Comfortable With Functions

 General function syntax
 give it a name and pass it parameters, so
 myArgument is the parameter here

```
function myBabyFunction(myArgument) {
  console.log(myArgument)
}
```

We can pass it a bunch of arguments, or parameters, if we want to:

```
function writeABunchOfStuff(v1, v2, v3, v4) {
  W(v1 + "<br>")
  W(v2 + "<br>")
  W(v3 + "<br>")
  W(v4 + "<br>")
}`


writeABunchOfStuff('hello', 'goodbye', 'how are you', 'whats up')
```


But JavaScript also takes something called the arguments array, which could save us some trouble

```
function writeStuff() {
  for (i = 0; i < writeWithArguments.arguments.length; i++) {
    W(writeWithArguments.arguments[i] + "<br>")
  }
}
```

We can also return stuff from JavaScript
 which could be useful if we want to, say, assign a variable to a function

```
function capitalizeWords() {
  let s = ""
  for (i = 0; i < capitalizeWords.arguments.length; i++) {
    if we try this, we only get the first letter
        s += capitalizeWords.arguments[i][0].toUpperCase() + " "
        s += capitalizeWords.arguments[i][0].toUpperCase() + capitalizeWords.arguments[i].substr(1).toLowerCase() + " "
  }
  return s
}

let cap = capitalizeWords("i", "dont", "use", "punctuation")

W(cap += "<br>")
```

## Read:
- [JS Variables](https:www.w3schools.com/js/js_variables.asp)
- [JS Functions](https:www.w3schools.com/js/js_functions.asp)
- [JS objects](https:www.w3schools.com/js/js_objects.asp)
- [JS arrays](https:www.w3schools.com/js/js_arrays.asp)





