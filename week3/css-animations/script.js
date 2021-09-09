// Spoiler: once we get to jQuery, this stuff becomes a lot easier
//add an onclick listener
let clickableBigger = O('clickable-bigger')
clickableBigger.onclick = function(element) {
  //change the class
  clickableBigger.classList.add("make-bigger")
}


//you can also add an event listener

let clickableMove = O('clickable-move')

// an event listener is another way to listen for a click on an element
clickableMove.addEventListener("click", function() {
  clickableMove.classList.add("move-left")
})

// we can also fire a javascript function on a button click
function makeTriangle() {
  let clickableTriangle = O('clickable-triangle')
  clickableTriangle.classList.remove("circle")
  clickableTriangle.classList.add("triangle")
}
