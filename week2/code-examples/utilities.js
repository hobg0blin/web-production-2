//Utility Functions
//writes directly to the document
function W(el) {
  document.write(el + "<br>")
}

function WB(el) {
  document.write(el + "<br><div class='separator'></div></br>")
}

// allows us to get an object and do something to it
function O(i)
{
  return typeof i == 'object' ? i : document.getElementById(i)
}

// allows us get the style of an element so we can change it
// this lets us change styles quickly, like:   O('myobj').style.color = 'green'
function S(i)
{
  return O(i).style
}

// this allows us to get an array of all elements with a certain class
// so we could loop through that array and change the style of each element

function C(i)
{
  return document.getElementsByClassName(i)
}
