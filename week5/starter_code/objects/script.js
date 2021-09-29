// simple object operations
let fruit = {"name": "banana"}

let complexFruit = {"name": "blueberry", "color": "blue", "flavor": "sweet"}

//adding an object to the DOM with innerHTML

function appendBlueberry() {
  let blueberryDescription = O('blueberry')
  blueberryDescription.innerHTML += "<div>Fruit name: " + complexFruit.name + "</div>"
  blueberryDescription.innerHTML += "<div>Fruit color: " + complexFruit.color + "</div>"
  blueberryDescription.innerHTML += "<div>Fruit flavor: " + complexFruit.flavor + "</div>"

}

// using createElement
function createDiv(attribute, fruitProperty) {
}

let orange = {'name': 'orange', 'color': 'orange', 'flavor': 'citrus'}

function appendOrange() {
  let orangeDescription = O('orange')
}

let banana = {'name': 'banana', 'color': 'yellow', 'flavor': 'depends on how ripe it is'}

// looping over a single object
function appendBanana() {
  let bananaDescription = O('banana')
}

// arrays of objects
let fruitArray = [{'name': 'orange', 'color': 'orange', 'flavor': 'citrus'}, {'name': 'blueberry', 'color': 'blue', 'flavor': 'sweet'}, {'name': 'banana', 'color': 'yellow', 'flavor': 'depends on how ripe it is'}]

//adding an array of objects to the DOM
function makeFruitLibrary(array) {
  let library = O('fruit-library')
  //clear out the HTML in case we call it again
  library.innerHTML = ''
}
makeFruitLibrary(fruitArray)

// getting an array of DOM elements
function showFruitInformation(HTMLArray, objectArray) {
}

showFruitInformation(elementArray, fruitArray)

//adding to our array
function addFruit() {
  let nameInput = O('fruit-name')
  let flavorInput = O('fruit-flavor')
  let colorInput = O('fruit-color')

  nameInput.value = ''
  flavorInput.value = ''
  colorInput.value = ''
}

// advanced array functions
let searchButton = O('find-fruit')
searchButton.onclick = function() {
}


function findFruit(name, array) {
}


//objects with arrays
let pizzaObject = {'neapolitan': {'toppings': ['mozzarella', 'tomato sauce', 'basil']}, 'pepperoni': {'toppings': ['cheese', 'pepperoni']}}

let pizzaContainer = O('pizza-toppings')

// looping over an object with an array as a key
