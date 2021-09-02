//Utility Functions
// this just writes to the document but makes sure we add a line break
function W(el) {
  document.write(el + "<br>")
}
//this gets us an object
function O(i)
{
  return typeof i == 'object' ? i : document.getElementById(i)
}

function S(i)
{
  return O(i).style
}

// allows us to change styles quickly, like:   O('myobj').style.color = 'green'

function C(i)
{
  return document.getElementsByClassName(i)
}
