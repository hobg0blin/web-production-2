// COMMENTS: these help describe what your code is doing
//
//
/* This is a multiline comment
 * in case you have a lot to say
 */
// Javascript Basics
console.log("i'm coming from a script!")

document.getElementById('title').innerText = "JavaScript Rules!"

document.querySelector('p').innerText = "i'm changing my text"

document.querySelector('.change-html').innerHTML = '<strong>I HAVE A LOT TO SAY</strong>'

document.getElementById('title').style.color = 'pink'


let color = 'green'
//console.log('color: ', color)
color = 'ceruleant'
//console.log('new color', color)

const constantColor = 'red'
//console.log('constant color: ', constantColor)
//constantColor = 'blue'

// let myGlobalVariable = 'hello'
// function logGlobalVariable() {
//   console.log(myGlobalVariable)
// }
// logGlobalVariable()
//
// function redeclareGlobalVariable() {
//   let myGlobalVariable = 'goodbye'
//   console.log('inside the function', myGlobalVariable)
// }
//
// redeclareGlobalVariable()

function sayWhassup() {
  console.log('whassup')
}

document.getElementById('say-whassup').onclick = function() {
  sayWhassup()
}

//sayWhassup()
function sayTheLine(word) {
  console.log(word)
}

let theLine = 'Come on, Joe, hit it!'
//sayTheLine(theLine)

let person = 'Brent '
//onsole.log('person: ', person)
function addToString(string) {
  return string += ', is the greatest'
}

person = addToString(person)
//console.log('added to string: ', person)

function addBoxes() {
  O('box-container').innerHTML += "<div class='box'>More Boxes!!!!</div>"
}


let divChangeColor = 'green'
let changeDiv = O('change-me')

function changeColor(element) {
  S(element).backgroundColor = divChangeColor
}

changeDiv.onclick = function() {
  changeColor(changeDiv)
}

function getAndChangeColor() {
  let valueElement = O("set-color")
  let colorDiv = O("change-me-input")

  divChangeColor = valueElement.value
  console.log('divchangeColor')
  changeColor(colorDiv)

  valueElement.value = ''
}

let changeButton = O('change-color')

changeButton.onclick = function() {
  getAndChangeColor()
}


function changeBoxWidth() {
  let widthInput = O('set-width')
  let boxStyle = S('change-my-width')
  console.log('width input ', widthInput)
  let newWidth = parseInt(widthInput.value)
  console.log('new width: ', newWidth)
  boxStyle.width = newWidth + 'px'
  widthInput.value = ''
}

function changeBoxRadius() {
  let box = S('box-circle')
  console.log('box radius: ', box.borderRadius)
  if (box.borderRadius == '') {
    box.borderRadius = '25px'
  } else if (box.borderRadius == '25px') {
    box.borderRadius = '75px'
  } else {
    box.borderRadius = ''
  }
}

function saySomething() {
  let select = O('talk-to-me')
  let outputText = O('output-text')
  let value = select.value
  console.log('value: ', value)
  switch (value) {
    case "compliment":
      outputText.innerText = "You're handsome"
      break;
    case "insult":
      outputText.innerText = "I can't think of an insult, you're too handsome"
      break;
    case "question":
      outputText.innerText = "What is he talking about"
      break;
    case "fact":
      outputText.innerText = "Pigeons can fly up to 77 miles per hour"
      break;
    default:
      outputText.innerText = "I have nothing to say"
      break;
  }
}

// Try it yourself down here
O('change-margin').onclick = function() {
  let boxStyle = S('change-margin')
  // try moving the box around by setting its margin - boxStyle.marginRight
}

O('change-border').onclick = function() {
  let boxStyle = S('change-border')
  //boxStyle.border =
}

function addToPage() {
  // get the <p> element beneath the button and try setting its innerText or innerHTML
  // p.innerText or p.innerHTML = 'something'
 let p = O('add-something')
}
