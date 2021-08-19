## Javascript Refresher

JavaScript is a client-side (and now, also, server-side!) language that can add interactivity and behavior to a web document.

### Basic JavaScript

#### Including Your Script

The `<script></script>` tag is used to embed JavaScript in an HTML file, and can be put in the head or body tags - usually it’s put in the `<head>` tag to execute when the page loads.
You can include a local script - `<script src=’myscript.js’` or an external script, like jQuery `<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>`
#### Variables:


Naming conventions: JavaScript traditionally uses camelCase variable and function declarations, so the first letter is lower case and subsequent letters are uppercase, like so: `myVariable`

`let myName = Brent`: the `let` keyword declares a variable that can be reassigned, so we can do something like:

```
let myName = 'Brent'
console.log(myName)
myName = 'NotBrent'
console.log(myName)
```

`const myName = 'Brent'`: the `const` or “constant” keyword declares a variable that **cannot** be reassigned.

#### Datatypes

JavaScript allows you to work with four primitive datatypes:
- numbers
- strings of text
- boolean truth values
- symbols (a unique value to avoid value collisions that we won’t talk about much in this course, but you can find more [here](https://hacks.mozilla.org/2015/06/es6-in-depth-symbols/))

As well as two datatypes that are our greatest enemies:
- null: an empty object with no value
- undefined: an object that does not exist and has no reference

We can also use composite datatypes:

**Arrays**: a list of objects for us to reference.

`let fruits = [‘banana’, ‘apple’, ‘orange’]`

We can then reference them by using array indexing (**Remember**: the first item in the array is always at index 0)

`console.log(fruits[1])`

**Objects**: a composite datatype that represents a collection of values.

`let fruit = {name: “Apple”, “color”: “red”, “types”: [“Granny Smith”, “Melba”]}`

## Functions

A function performs operations on different elements and datatypes:

```
function getFruitInfo(fruit) {
  return “The” + fruit.name + “is” + fruit.color
}
```

## Operators

Operators are symbols used to work with variables, e.g.:

```
let x = 1
let y = 4
let z = x + y
```

Arithmetic operators: +, -, *, % , ++, --

Assignment operators:

These assign values to JavaScript variables:

=, +=, *=, /= %=
E.g. - the operator += adds the value on the right side to the variable on the left, so

```
let x=1
let x*=5
console.log(x)
```

Comparison operators:

These are used to compare different variables:
==, ===, !=, >, <, >=, <=

[Reference](https://www.w3schools.com/js/js_comparisons.asp)

Logical operators:

Used to determine the logic between variables and values.

Logical operators: &&, ||, ! (and, or, not)
[Reference](https://www.w3schools.com/js/js_comparisons.asp)

## Escape Characters

These are used to allow us to use “double quotes” in strings.

E.g., JavaScript won’t allow this string because it uses quotation marks twice:

`let text = “Joe’s “World Famous” Pizza doesn’t seem that famous”`

We can resolve this problem by using the backslash escape character:

`let text = “Joe’s \“World Famous”\ Pizza doesn’t seem that famous.”`
[Reference](https://www.w3schools.com/js/js_strings.asp)

## Scoping

Global variables are declared outside of functions, but can be accessed within them. If we redeclare a global variable inside a function, it’ll change withing that function but not outside of it.

```
  var myName = “Brent”
  function redeclareName() {
    console.log(myName)
    var myName = “Dave”
    console.log(myName)
  }
  console.log(myName)
```

## Interacting With The DOM

JavaScript is able to intercept certain events in the DOM, methods like a button click(), window open(), or text selected(). Parentheses signal reference to a method.

JavaScript can also select elements in the DOM and do things to them, like changing text:

```
document.getElementById(“greeting”).innerHTML =
“Hello!”
//or we can use queryselector, which uses the ‘#’ mark to get something by its ID
document.querySelector(“#greeting).innerHTML = “Hello!”
```

Other forms of DOM traversal:

```
getElementById()
getElementsByClassName()
getElementsByName()
getElementsByTagName()
querySelector()
querySelectorAll(
```

**Event Handling**

JavaScript can also detect events, like submitting a form or mousing over an image. JavaScript deals with these events using commands called event attributes, where an action by a user triggers an event attribute in your script.

[Reference](https://www.w3schools.com/tags/ref_eventattributes.asp)
### Commenting
