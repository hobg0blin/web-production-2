let fruit = {"name": "banana"}

let complexFruit = {"name": "blueberry", "color": "blue", "flavor": "sweet"}

function appendBlueberry() {
  let blueberryDescription = O('blueberry')
  blueberryDescription.innerHTML += "<div>Fruit name: " + complexFruit.name + "</div>"
  blueberryDescription.innerHTML += "<div>Fruit color: " + complexFruit.color + "</div>"
  blueberryDescription.innerHTML += "<div>Fruit flavor: " + complexFruit.flavor + "</div>"

}

function createDiv(attribute, fruitProperty) {
}

let orange = {'name': 'orange', 'color': 'orange', 'flavor': 'citrus'}

function appendOrange() {
  let orangeDescription = O('orange')
}

let banana = {'name': 'banana', 'color': 'yellow', 'flavor': 'depends on how ripe it is'}

// but this is still a lot of typing, so
// let's try looping over it!
function appendBanana() {
  let bananaDescription = O('banana')
}

// arrays of objects

let fruitArray = [{'name': 'orange', 'color': 'orange', 'flavor': 'citrus'}, {'name': 'blueberry', 'color': 'blue', 'flavor': 'sweet'}, {'name': 'banana', 'color': 'yellow', 'flavor': 'depends on how ripe it is'}]


function makeFruitLibrary(array) {
  let library = O('fruit-library')
  //clear out the HTML in case we call it again
  library.innerHTML = ''
}
makeFruitLibrary(fruitArray)

//now let's try doing the reverse and iterating over the array from the dom, now that we've added all these divs


function showFruitInformation(HTMLArray, objectArray) {
}

showFruitInformation(elementArray, fruitArray)

function addFruit() {
  let nameInput = O('fruit-name')
  let flavorInput = O('fruit-flavor')
  let colorInput = O('fruit-color')

  nameInput.value = ''
  flavorInput.value = ''
  colorInput.value = ''
}

let searchButton = O('find-fruit')
searchButton.onclick = function() {
}


function findFruit(name, array) {
}


//objects with arrays
let pizzaObject = {'neapolitan': {'toppings': ['mozzarella', 'tomato sauce', 'basil']}, 'pepperoni': {'toppings': ['cheese', 'pepperoni']}}

let pizzaContainer = O('pizza-toppings')

//loop over the keys of our pizza container

