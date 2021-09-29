// create an array of things you're interested in
let myArray = ['dogs', 'thats about it']

let container = O('array-container')

// try adding all your array items to the page in a for loop as list items, reversing them, getting individual items

function addArray(arr) {
  // always zero out the container if you want to add more to it
  container.innerHTML = ""
  container.innerHTML += "<ul>"
  // for loop on the array
  // you can either use the CreateLi function
  // let item = createLi(array[i])
  // container.appendChild(item)
  // or just add to the innerHTML
  // container.innerHTML += "<li>" + array[i] + "</li>"
  container.innerHTML += "</ul>"
}

O('add-button').onclick = function() {
  let input = O('add-item')
  myArray.push(input.value)
  console.log(myArray)
  // call addArray again to display the new item
  addArray(myArray)
  input.value = ''
}

function createLi(item) {
  let element = document.createElement("li")
  item.innerText = item
  return img;
}

addArray(myArray)
