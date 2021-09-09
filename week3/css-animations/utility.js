//Utility Functions
// "O" lets us get an object from the HTML
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

// allows us to change entire classes quickly, like:
// myarray = C('myclass')
// for (i = 0 ; i < myarray.length ; ++i)
//  S(myarray[i]).textDecoration = 'underline'


