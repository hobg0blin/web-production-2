// simple array operations
let animalsArray = ['dog', 'cat', 'rat', 'bat']

// console.log(animalsArray.length)

// console.log(animalsArray[0])

// console.log(animalsArray[3])

// console.log(animalsArray[animalsArray.length - 1])

let hatString = "baseball, bowler, derby"
let hatArray = hatString.split(' ')
//console.log(hatArray)

let animalString = animalsArray.join(' ')
//console.log(animalString)

O('just-one-animal').innerText = animalsArray[0]


animalsArray.push('capybara')

// console.log('animals: ', animalsArray)

// for (let i = 0; i < 5; i++) {
//   // console.log('i: ', i)
//   // console.log(animalsArray[i])
// }
//
//
// for (let animal of animalsArray) {
//   // console.log('for of loop: ', animal)
// }

animalsArray.forEach(animal => {
  console.log('for each: ', animal)
})

function showAnimals(arr) {
  console.log('show animals', arr)
  let animalsP = O('animals')
  let animals = ''
  for (let i= 0; i < arr.length; i++) {
    animals += arr[i] + ' '
  }
  animalsP.innerText = animals
  if (arr.length > 8) {
    animalsP.textContent = "too many animals"
  }
}


O('add-elements').onclick = function() {
  showAnimals(animalsArray)
}

function showJustOneAnimal(arr, i) {
  O('just-one-animal').innerHTML = arr[i]
}


let counter = 0
O('one-at-a-time').onclick = function() {
  showJustOneAnimal(animalsArray, counter)
  counter++
  if (counter == animalsArray.length) {
    counter = 0
  }
}

function flipTheAnimals() {
  animalsArray.reverse()
  console.log('animals array: ', animalsArray)
  showAnimals(animalsArray)
}

O('add-button').onclick = function() {
  let input = O('add-an-animal')
  animalsArray.push(input.value)
  input.value = ''
}


let someColors = ['green', 'red', 'blue', 'yellow', 'purple']
//add elements to the HTMl

let elementsToChange = document.querySelectorAll('.add-color')
console.log('elements', elementsToChange)
O('append-elements').onclick = function() {
  addColors(elementsToChange, someColors)
}

// use a for loop to interact with html
 function addColors(elements, colors) {
    for (let i=0; i < elements.length; i++) {
      S(elements[i]).backgroundColor = colors[i]
      elements[i].innerText = colors[i]
    }
}

// nested arrays
let someMoreColors = [['orange', 'pink', 'lavender'],['salmon', 'coral', 'red'], [
'tomato', 'gold', 'lemonchiffon']]

let boxes = []
let row1 = document.querySelectorAll('.box-row-1')
let row2 = document.querySelectorAll('.box-row-2')
let row3 = document.querySelectorAll('.box-row-3')
boxes[0] = row1
boxes[1] = row2
boxes[2] = row3

console.log('boxes: ', boxes)
function changeBoxColors(elements, colors) {
  for (let i = 0; i < elements.length; i++) {
    for (let j =0; j < elements[i].length; j++) {
      S(elements[i][j]).backgroundColor = colors[i][j]
      elements[i][j].innerText = colors[i][j]
    }
  }
}

changeBoxColors(boxes, someMoreColors)


// while loops
let whileLoopCounter = 0


while (whileLoopCounter < 10) {
  console.log('whilel loop counter', whileLoopCounter)
  whileLoopCounter++
}
// 
// while (true) {
//   console.log("I'll break the browser")
// }
