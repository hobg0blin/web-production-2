// DOM EVENTS:
// Good to wrap your jQuery script in a
// DOM load event - this means the html is fully loaded
$(function() {

// mouseenter and mouseleave
// $('#mouse-test').mouseenter(function() {
//   $(this).html("You're hovering over me!")
// })
//
// $('#mouse-test').mouseleave(function() {
//   $(this).html("Don't Leave Me!")
// })

// or just chain them with hover

$('#mouse-test').hover(function() {
  $(this).html("hello!")
}, function() {
  $(this).html("goodbye!")
}
)


// getting an image to track the mouse
getPokemon('charizard', '#pokemon')

let mouseX = 0
let mouseY = 0
let follow = false;
$("#pokemon").click(function() {
  follow=true;
})
$("#pokemon").dblclick(function() {
  follow= false;
})
$(document).mousemove(function(e){
  mouseX = e.pageX
  mouseY = e.pageY
  console.log('mouseX: ', mouseX)
  console.log('mouseY: ', mouseY)
  if (follow == true) {
    $("#pokemon").css({
      position: 'absolute',
      left: mouseX + 'px',
      top: mouseY + 'px'

    })
  }
 })
})
// keep our code DRY - keep functions out of the DOM load code
function getPokemon(pokemonName) {
  $.getJSON(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`, function(data) {
    console.log('data: ', data)
    $("#pokemon-img").attr({src: data.sprites.front_default})
    $("#name").text(data.name)
    for (let object of data.types) {
      $("#type").append(`<li class="capitalize">${object.type.name}</li>`)
    }
  }).fail(function() {
    console.log("We couldn't find that pokemon")
  })
}
