//Make your own array of 5 objects with at least 4 keys
// This one only has 3 right now!
let myItems = [{'noun': 'dog', 'adjective': 'brown', 'verb': 'ran'}]


function showElements(array) {
  let container = O('object-container')
  //clear out the inner HTML in case we call this function again
  container.innerHTML = ''
  //use a for loop to add the items from the array - you can just add it to the innerHTML, or use the createDiv function below and .appendChild to the container
}

showElements(myItems)



function addItem() {
  // add inputs for your own keys
  let nounInput = O('key-1')
  let adjectiveInput = O('key-2')
  let verbInput = O('key-3')

  // change these to your own keys
  let noun = nounInput.value
  let adjective = adjectiveInput.value
  let verb = verbInput.value
  // create a new object - again, change this to your own keys
  let item = {noun: noun, adjective: adjective, verb: verb}
  myItems.push(item)
  //if we don't call showElements again, it won't display the new one
  showElements(myItems)
  //zero out the inputs
  nounInput.value = ''
  adjectiveInput.value = ''
  verbInput.value = ''
}

function createDiv(object) {
  let div = document.createElement("div")
  //you could add more properties to the textContent, or set its innerHTML to properties
  div.textContent = 'The ' + ' ' + object.adjective + ' ' object.noun + ' ' object.verb + ' ' + object.adverb
  return div
}

function getRandomItem(array) {
  //don't worry about the math here, this just selects a random item from the array
  //but it could be useful if you want to do something similar!

return array[Math.floor(Math.random()*array.length)]
}
