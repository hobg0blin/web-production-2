let clickableBigger = document.getElementById("clickable-bigger")
clickableBigger.onclick = function() {
  clickableBigger.classList.add("make-bigger")
}


let clickableMove = document.getElementById("clickable-move")
clickableMove.addEventListener("click", function() {
  clickableMove.classList.add("move-left")
});


function makeTriangle() {
  let clickableTriangle = document.getElementById("clickable-triangle")
  clickableTriangle.classList.remove("circle")
  clickableTriangle.classList.add("triangle")

}
